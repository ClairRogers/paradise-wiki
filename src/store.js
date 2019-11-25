import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    characters: [],
    activeCharacter: {},
    sections: []
  },
  mutations: {
    setCharacters(state, data) {
      state.characters = data;
    },
    setActiveCharacter(state, data) {
      state.activeCharacter = data;
    },
    setSections(state, data) {
      state.sections = data;
    }
  },
  actions: {
    getCharacters({ commit, dispatch }) {
      api.get("characters/").then(res => {
        commit("setCharacters", res.data);
      });
    },

    newChara({ commit, dispatch }, payload) {
      api.post("characters/", payload).then(res => {
        console.log("character created");
        console.log(res.data);
      });
    },

    editChara({ commit, dispatch }, payload) {
      api.put("characters/" + payload._id, payload).then(res => {
        console.log("character edited");
        console.log(res.data);
        commit("setActiveCharacter", res.data);
      });
    },

    setActiveCharacter({ commit, dispatch }, payload) {
      commit("setActiveCharacter", payload);
      router.push({ name: "character", params: { characterId: payload._id } });
    },
    setActiveCharacterById({ commit, dispatch }, payload) {
      api.get("characters/" + payload).then(res => {
        commit("setActiveCharacter", res.data);
      });
    },

    getSections({ commit, dispatch }) {
      api.get("sections/").then(res => {
        commit("setSections", res.data);
      });
    },

    newSect({ commit, dispatch }, payload) {
      api.post("sections/", payload).then(res => {
        console.log("section created");
        console.log(res.data);
      });
    },

    editSect({ commit, dispatch }, payload) {
      api.put("sections/" + payload._id, payload).then(res => {
        console.log("section edited");
        console.log(res.data);
        // commit("setActiveCharacter", res.data);
      });
    },
    deleteSect({ commit, dispatch }, payload) {
      api.delete("sections/" + payload._id, payload).then(res => {
        console.log("section deleted");
        console.log(res.data);
      });
    }
  }
});
