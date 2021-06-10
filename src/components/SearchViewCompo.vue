<template>
  <div class="soccer">
    <div class="games">
      <h3 class="game-team">{{ data.title }}</h3>
      <span>{{ data.date.slice(0, 10) }}</span>
      <img class="thumbnail" v-bind:src="data.thumbnail" />
      <br />
      <span>{{ data.competition.name.replace(":", " ") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchView",
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.soccer {
  border: 1px solid black;
  width: 450px;
  display: inline-block;
  vertical-align: top;
  margin: 8px;
}
.games {
  padding: 10px;
  border-top: 1px solid #aaa;
  h3 {
    text-align: center;
    margin: 8px 0;
  }
  .thumbnail {
    width: 100%;
    height: 300px;
  }
}
</style>