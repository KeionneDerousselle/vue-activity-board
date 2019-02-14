export const state = () => ({
  activities: []
})

export const actions = {
  async getActivities({ commit }) {
    const result = await this.$axios.get('/activities')
    const { activities } = result.data
    commit('SET_ACTIVITIES', activities)
    return activities
  }
}

export const mutations = {
  SET_ACTIVITIES(state, payload) {
    state.activities = payload
  }
}

export const getters = {
  activities: ({ activities }) => activities
}
