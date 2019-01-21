/**
 * Vuex store for managing user favourites.
 */
const state = {
  favourites: []
}

const getters = {
  /**
   * Returns whether or not an item with id is favourited already or not.
   *
   * @param Integer id  The unique id of the item you're checking.
   * @return Boolean Whether or not the item is favourited.
   */
  isFavourited: (state) => (id) => {
    let x = state.favourites.filter(result => {
      return result.uid === id
    })
    return x.length !== 0
  },
  /**
   * Returns a list of all favourites as an array of objects.
   *
   * @return Array Array of objects containing favourited items.
   */
  list: (state) => {
    return state.favourites
  }
}

const actions = {
  /**
   * Adds a favourite to the list.
   *
   * @param Object The item that you wish to add to favourites.
   */
  addFavourite ({ commit }, payload) {
    commit('ADD_FAVOURITE', payload)
  },
  /**
   * Removes a favourite from the list.
   *
   * @param Object The item that you wish to remove from the favourites.
   */
  removeFavourite ({ commit }, payload) {
    commit('REMOVE_FAVOURITE', payload)
  },
  /**
   * Toggles a favourite from in the list. If the uid already exists in the
   * list, the favourite will be removed. Otherwise, it will be added.
   *
   * @param Object The item that you wish to toggle in the favourites.
   */
  toggleFavourite ({ commit, state }, payload) {
    let x = state.favourites.filter(result => {
      return result.uid === payload.uid
    })

    if (x.length !== 0) {
      commit('REMOVE_FAVOURITE', payload)
    } else {
      commit('ADD_FAVOURITE', payload)
    }
  }
}

const mutations = {
  /**
   * Adds a favourite to the store.
   *
   * @param Object The item that you wish to add to favourites.
   */
  ADD_FAVOURITE: (state, payload) => {
    let x = state.favourites.filter(result => {
      return result.uid === payload.uid
    })

    if (x.length === 0) {
      state.favourites.push(payload)
    }
  },
  /**
   * Removes a favourite from the store.
   *
   * @param Object The item that you wish to remove from favourites.
   */
  REMOVE_FAVOURITE: (state, payload) => {
    let x = state.favourites.filter(result => {
      return result.uid === payload.uid
    })[0]

    state.favourites.splice(state.favourites.indexOf(x), 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
