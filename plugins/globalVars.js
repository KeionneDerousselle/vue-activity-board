import Vars from '../env'

let env = 'local'
const seeInUrl = inUrl => window.location.href.indexOf(inUrl) > -1
const envs = ['local', 'dev', 'stage', 'prod']

export default function({ store }) {
  if (process.server) {
    require('dotenv').config({ path: '../server/.env' })
    env = process.env.NODE_ENV || env
  } else {
    envs.forEach(e => {
      if (seeInUrl(e)) {
        env = e
      }
    })
  }

  store.commit('globalVars/SET_GLOBAL_VARS', Vars[env])
}
