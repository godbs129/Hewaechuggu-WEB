<template>
  <div>
    <SearchCompo />
    주의 : 팀 명을 정확하게 입력해주세요(ex: Manchester City)
    <div v-for="(data, index) in games" v-bind:key="index">
      <SearchViewCompo v-bind:data="data" />
    </div>
  </div>
</template>

<script>
import SearchCompo from "../components/SearchCompo.vue";
import SearchViewCompo from "../components/SearchViewCompo.vue";
import store from "../store";
export default {
  name: "Search",
  components: {
    SearchCompo,
    SearchViewCompo,
  },
  computed: {
    games() {
      return store.state.game;
    },
  },
  created: async () => {
    await store.dispatch("getGames");
  },
};
</script>