<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <section class="section first">
      <div class="container">
        <div class="mb-30" v-html="cmsData.intro_text"></div>

        <div class="columns is-desktop">
          <div class="column">
            <SearchForm
              v-model="searchStr"
              :search-placeholder="cmsData.search_placeholder"
            />
            <ProtocolsList
              v-model="protocols"
              :protocols-text="cmsData.protocols_text"
              :available-protocols="availableProtocols"
            />
            <h2 v-if="isLoading" class="mt-15 mb-15 is-size-4">
              {{ cmsData.loading_text }}
            </h2>
            <DeviceList
              :list-data="listData"
              :search-str="searchStr"
              :compatible-text="cmsData.compatible_text"
              :development-text="cmsData.development_text"
              :notfound-text="cmsData.notfound_text"
              class="mt-25"
              :class="isLoading ? 'hidden' : ''"
            />
            <Pagination
              v-if="lastPage > 1"
              v-model="page"
              class="mt-35"
              :last-page="lastPage"
            />
          </div>

          <div class="column is-narrow">
            <RequestEquipment :cms-data="cmsData" />
          </div>
        </div>
      </div>
    </section>
  </page-container>
</template>

<script>
import BackEndServices from '@/services/BackEnd.services.js'
import SearchForm from '@/components/compatibility/search-form.vue'
import DeviceList from '@/components/compatibility/device-list.vue'
import Pagination from '@/components/compatibility/pagination.vue'
import RequestEquipment from '@/components/compatibility/request-equipment.vue'
import ProtocolsList from '@/components/compatibility/protocols-list.vue'

export default {
  name: 'Compatibility',
  components: {
    SearchForm,
    DeviceList,
    Pagination,
    RequestEquipment,
    ProtocolsList,
  },
  nuxtI18n: {
    paths: {
      en: '/compatibility',
      fr: '/compatibilite',
      de: '/kompatibilitatsprufung',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/page-compatibility?_locale=' + i18n.localeProperties.iso
        )
      ),
      $axios.get(
        $getUrlFromCms('/navbar?_locale=' + i18n.localeProperties.iso)
      ),
    ])
    return {
      cmsData: {
        ...content[0].data,
      },
      navbarData: {
        ...content[1].data,
      },
    }
  },
  data() {
    return {
      isLoading: false,
      searchStr: '',
      protocols: [],
      listData: {},
      page: '',
      lastPage: 1,
      debounceID: null,
      firstQuery: true, // used to do not change page from 1st query (created method)
      availableProtocols: [
        { label: 'Modbus IP', value: 'MODBUS_IP' },
        { label: 'Modbus Serial', value: 'MODBUS_SERIAL' },
        { label: 'LPB', value: 'LPB' },
        { label: 'LoRaWAN V1.0', value: 'LORAWAN_V1_0' },
        { label: 'KNX S', value: 'KNX_S' },
        { label: 'KNX LTE', value: 'KNX_LTE' },
      ],
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: this.$getMeta(this.cmsData.meta),
      script: [
        {
          type: 'application/ld+json',
          json: this.$getStructuredData(),
        },
      ],
    }
  },

  watch: {
    page() {
      // Use debounce to prevent double API call when both page and searchStr are changed at the same time
      if (this.debounceID) clearTimeout(this.debounceID)
      this.debounceID = setTimeout(() => {
        this.loadData()
      }, 350)
    },

    searchStr() {
      if (!this.firstQuery) this.page = 1 // Reset page counter on new search
      if (this.debounceID) clearTimeout(this.debounceID)
      this.debounceID = setTimeout(() => {
        this.loadData()
      }, 350)
    },

    protocols() {
      if (this.firstQuery) return // avoid duplicated requests to api on created method
      if (this.debounceID) clearTimeout(this.debounceID)
      this.debounceID = setTimeout(() => {
        this.loadData()
      }, 350)
    },
  },

  created() {
    // filter to allow only available protocols
    const availableProtocolsValues = this.availableProtocols.map(
      (protocol) => protocol.value
    )
    this.protocols = availableProtocolsValues
    if (this.$route.query.protocols) {
      try {
        let queryProtocols = this.$route.query.protocols
        // if queryProtocols is not an array (when only 1 protocol is in the query), convert it to an array
        if (!Array.isArray(queryProtocols))
          queryProtocols = queryProtocols.split(',')
        this.protocols = queryProtocols.filter((protocol) =>
          availableProtocolsValues.includes(protocol)
        )
      } catch (err) {
        this.protocols = []
      }
    }
    this.page = ~~this.$route.query.page || 1
    this.searchStr = this.$route.query.term || ''
  },

  methods: {
    loadData() {
      this.isLoading = true
      // If all protocols are selected, send empty protocols to API to doesn't filter by protocol
      let protocolList = this.protocols
      if (protocolList.length === this.availableProtocols.length) {
        protocolList = []
      }
      BackEndServices.equipmentChecker({
        term: this.searchStr,
        page: this.page,
        protocols: protocolList,
      })
        .then((data) => {
          this.listData = data
          this.lastPage = data.meta.last_page
          if (this.page !== '') {
            const query = {}
            if (this.page > 1) query.page = this.page
            if (this.searchStr !== '') query.term = this.searchStr
            if (protocolList.length > 0) query.protocols = protocolList
            this.$router.push({
              query,
              params: { keepScrollPosition: true },
            })
          }
          if (this.$route.query.page) {
            window.scrollTo(0, 0)
          }
        })
        .finally(() => {
          this.isLoading = false
          this.firstQuery = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.hidden {
  visibility: hidden;
}

.mb-30 {
  margin-bottom: 30px;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  a,
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
  }
  button.inverted {
    background-color: rgba($white, 0.08);
    &:hover {
      background-color: rgba($white, 0.1);
    }
  }
}
</style>
