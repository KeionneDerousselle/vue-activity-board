export default function({ $axios, store }) {
  $axios.defaults.baseURL = store.getters['globalVars/apiUrl']
}
