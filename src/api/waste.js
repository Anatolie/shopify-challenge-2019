/**
 * Waste API Wrapper
 *
 * This houses any and all API requests associated to the Toronto Garbage API.
 */

import api from './index'

const wasteAPI = {
  /**
   * Retrieves a list of waste products to be queried.
   */
  getList (options) {
    return api('GET', 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=5000', options)
  }
}

export default wasteAPI
