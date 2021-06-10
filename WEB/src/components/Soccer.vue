<template>
  <div class="soccer">
    <div class="soccer-game">
      <h3 class="game-team">{{ res.title }}</h3>
      <span>{{ res.date.slice(0, 10) }}</span>
      <br />
      <span>{{ res.competition.name.replace(":", " ") }}</span>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";
export default {
  name: "Soccer",
  props: ["res"],
};
</script>
<style lang="scss" scoped>
.soccer {
  border: 1px solid black;
  width: 400px;
  display: inline-block;
  vertical-align: top;
  margin: 8px;
}
.soccer-game {
  padding: 10px;
  border-top: 1px solid #aaa;
  h3 {
    text-align: center;
    margin: 8px 0;
  }
}
</style>