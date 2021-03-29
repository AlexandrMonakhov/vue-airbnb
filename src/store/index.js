import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import card from './card'
import experiencesCard from './experiencesCard'
import homes from './homes'
import restaurants from './restaurants'

export default new Vuex.Store({
  modules: { card, experiencesCard, homes, restaurants }
})
