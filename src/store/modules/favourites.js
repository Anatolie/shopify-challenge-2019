const state = {
  favourites: []
}

const getters = {
  isFavourited: (state) => (id) => {
    return state.favourites.indexOf(id) !== -1
  }
}

const actions = {
  addFavourite ({ commit }, payload) {
    commit('ADD_FAVOURITE', payload)
  },
  removeFavourite ({ commit }, payload) {
    commit('REMOVE_FAVOURITE', payload)
  },
  toggleFavourite ({ commit, state }, payload) {
    if (state.favourites.indexOf(payload) !== -1) {
      commit('REMOVE_FAVOURITE', payload)
    } else {
      commit('ADD_FAVOURITE', payload)
    }
  }
}

const mutations = {
  ADD_FAVOURITE: (state, payload) => {
    if (state.favourites.indexOf(payload) === -1) {
      state.favourites.push(payload)
    }
  },
  REMOVE_FAVOURITE: (state, payload) => {
    let index = state.favourites.indexOf(payload)
    if (index !== -1) {
      state.favourites.splice(index, 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
