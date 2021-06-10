import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team: "",
    game: null,
  },
  mutations: {
    getGames: async (state, team) => {
      state.game = (await axios.get(`http://localhost:4000/search/get?team=${team}`)).data.data;
    },
  },
  actions: {
    getGames: async ({ commit }, team) => {
      commit('getGames', team);
    }
  },
  modules: {
  },
})
