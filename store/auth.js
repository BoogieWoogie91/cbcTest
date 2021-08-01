export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
}

export const actions = {
  login({commit}) {
    commit('setToken', 'trueToken')
  },
}

export const getters = {
  hasToken: state => !!state.token
}