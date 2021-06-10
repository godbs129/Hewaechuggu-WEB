<template>
  <div>
    <div class="input">
      <input v-model="team" @keyup="inputTeam" type="text" />
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Search",
  data() {
    return { team: "" };
  },

  methods: {
    inputTeam(event) {
      if (event.key === "Enter") {
        this.addTeam(event);
      }
    },
    async addTeam(event) {
      await store.dispatch("getGames", event.target.value);
      this.input = "";
    },
  },
};
</script>