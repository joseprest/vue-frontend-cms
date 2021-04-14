import en from './general/en.json'
import idexEn from './customer-stories/idex/idex-en.json'
import bouyguesEn from './customer-stories/bouygues/bouygues-en.json'
import calidityEn from './customer-stories/calidity/calidity-en.json'
import ibisConfluenceRestaurantEn from './customer-stories/ibis-confluence-restaurant/ibis-confluence-restaurant-en.json'
import ibisConfluenceEnergyEn from './customer-stories/ibis-confluence-energy/ibis-confluence-energy-en.json'
import ibisConfluenceTemperatureEn from './customer-stories/ibis-confluence-temperature/ibis-confluence-temperature-en.json'
import mesfruitsEn from './customer-stories/mesfruits/mesfruits-en.json'
import setemiEn from './customer-stories/setemi/setemi-en.json'
import cbreEn from './customer-stories/cbre/cbre-en.json'
import nexityEn from './customer-stories/nexity/nexity-en.json'
import widgetGetDemoEn from './customer-stories/widget-get-demo-en.json'
import iotSecurityEn from './iot-security/en.json'

export default {
  ...en,
  'customer-stories': {
    idex: idexEn,
    bouygues: bouyguesEn,
    widgetDemo: widgetGetDemoEn,
    calidity: calidityEn,
    'ibis-confluence-restaurant': ibisConfluenceRestaurantEn,
    'ibis-confluence-energy': ibisConfluenceEnergyEn,
    'ibis-confluence-temperature': ibisConfluenceTemperatureEn,
    mesfruits: mesfruitsEn,
    setemi: setemiEn,
    cbre: cbreEn,
    nexity: nexityEn,
  },
  'iot-security': iotSecurityEn,
}
