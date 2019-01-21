const state = {
  favourites: []
}

const getters = {
  isFavourited: (state) => (id) => {
    let x = state.favourites.filter(result => {
      return result.uid === id
    })
    return x.length !== 0
  },
  list: (state) => {
    return state.favourites
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
  ADD_FAVOURITE: (state, payload) => {
    let x = state.favourites.filter(result => {
      return result.uid === payload.uid
    })

    if (x.length === 0) {
      state.favourites.push(payload)
    }
  },
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
