<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>2214 전해윤</h2>
    <h3>
      <a target="_blank" href="https://www.github.com/godbs129">깃허브</a>,
      <a target="_blank" href="https://velog.io/@godbs129">블로그</a>,
      <a target="_blank" href="https://www.rocketpunch.com/@junhaeyoon"
        >로켓펀치</a
      >
    </h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
