<template>
  <div class="home">
    <img alt="무스타피" src="../assets/seungwoo.jpg" />
    <HelloWorld msg="헤왜추꾸" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
img {
  height: 450px;
  width: 450px;
  border-radius: 300px;
}
</style>