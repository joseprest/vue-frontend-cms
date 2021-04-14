import fr from './general/fr.json'
import idexFr from './customer-stories/idex/idex-fr.json'
import bouyguesFr from './customer-stories/bouygues/bouygues-fr.json'
import calidityFr from './customer-stories/calidity/calidity-fr.json'
import ibisConfluenceRestaurantFr from './customer-stories/ibis-confluence-restaurant/ibis-confluence-restaurant-fr.json'
import ibisConfluenceEnergyFr from './customer-stories/ibis-confluence-energy/ibis-confluence-energy-fr.json'
import ibisConfluenceTemperatureFr from './customer-stories/ibis-confluence-temperature/ibis-confluence-temperature-fr.json'
import mesfruitsFr from './customer-stories/mesfruits/mesfruits-fr.json'
import setemiFr from './customer-stories/setemi/setemi-fr.json'
import cbreFr from './customer-stories/cbre/cbre-fr.json'
import nexityFr from './customer-stories/nexity/nexity-fr.json'
import widgetGetDemoFr from './customer-stories/widget-get-demo-fr.json'
import iotSecurityFr from './iot-security/fr.json'

export default {
  ...fr,
  'customer-stories': {
    idex: idexFr,
    bouygues: bouyguesFr,
    widgetDemo: widgetGetDemoFr,
    calidity: calidityFr,
    'ibis-confluence-restaurant': ibisConfluenceRestaurantFr,
    'ibis-confluence-energy': ibisConfluenceEnergyFr,
    'ibis-confluence-temperature': ibisConfluenceTemperatureFr,
    mesfruits: mesfruitsFr,
    setemi: setemiFr,
    cbre: cbreFr,
    nexity: nexityFr,
  },
  'iot-security': iotSecurityFr,
}
