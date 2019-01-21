import api from './index'

const wasteAPI = {
  getList (options) {
    return api('GET', 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=5000', options)
  }
}

export default wasteAPI
