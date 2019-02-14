export const state = () => ({
  vars: {}
})

export const actions = {}

export const mutations = {
  SET_GLOBAL_VARS(state, payload) {
    state.vars = payload
  }
}

export const getters = {
  apiUrl: ({ vars }) => vars.apiUrl
}
