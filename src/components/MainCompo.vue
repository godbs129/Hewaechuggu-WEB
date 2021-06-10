<template>
  <div>
    <h1>경기 목록</h1>
    <div v-for="(res, index) in response" v-bind:key="index">
      <Soccer :res="res" />
    </div>
  </div>
</template>

<script>
import * as axios from "axios";
import Soccer from "./Soccer";

export default {
  name: "MainCompo",
  components: {
    Soccer,
  },
  data() {
    return {
      response: {},
    };
  },
  async created() {
    await this.get();
  },
  methods: {
    async get() {
      this.response = (
        await axios.get("https://www.scorebat.com/video-api/v1/")
      ).data;
    },
  },
};
</script>