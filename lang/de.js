import de from './general/de.json'
import idexDe from './customer-stories/idex/idex-de.json'
import bouyguesDe from './customer-stories/bouygues/bouygues-de.json'
import calidityDe from './customer-stories/calidity/calidity-de.json'
import ibisConfluenceRestaurantDe from './customer-stories/ibis-confluence-restaurant/ibis-confluence-restaurant-de.json'
import ibisConfluenceEnergyDe from './customer-stories/ibis-confluence-energy/ibis-confluence-energy-de.json'
import ibisConfluenceTemperatureDe from './customer-stories/ibis-confluence-temperature/ibis-confluence-temperature-de.json'
import mesfruitsDe from './customer-stories/mesfruits/mesfruits-de.json'
import setemiDe from './customer-stories/setemi/setemi-de.json'
import cbreDe from './customer-stories/cbre/cbre-de.json'
import nexityDe from './customer-stories/nexity/nexity-de.json'
import widgetGetDemoDe from './customer-stories/widget-get-demo-de.json'
import iotSecurityDe from './iot-security/de.json'

export default {
  ...de,
  'customer-stories': {
    idex: idexDe,
    bouygues: bouyguesDe,
    widgetDemo: widgetGetDemoDe,
    calidity: calidityDe,
    'ibis-confluence-restaurant': ibisConfluenceRestaurantDe,
    'ibis-confluence-energy': ibisConfluenceEnergyDe,
    'ibis-confluence-temperature': ibisConfluenceTemperatureDe,
    mesfruits: mesfruitsDe,
    setemi: setemiDe,
    cbre: cbreDe,
    nexity: nexityDe,
  },
  'iot-security': iotSecurityDe,
}
