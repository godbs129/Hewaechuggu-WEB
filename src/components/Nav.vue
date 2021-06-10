<template>
  <div>
    <div class="navbar">
      <div class="navbar-content">
        <div class="nav-first"><router-link to="/">Home</router-link></div>
        <div class="nav-second"><router-link to="/main">Main</router-link></div>
        <div class="nav-second">
          <router-link to="/search">Search</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: relative;
  width: 100%;
  height: 80px;
  border: 1px solid #c4c4c4;
  display: flex;

  .navbar-content {
    width: 100%;
    height: 93%;
    margin: 7px auto;
    margin-left: 650px;
    font-size: 22px;
    display: flex;
  }

  .nav-first {
    margin-top: 23px;
    width: 150px;
    align-items: center;
    text-align: center;

    margin-right: 50px;
  }

  .nav-second {
    margin-top: 23px;
    width: 150px;
    align-items: center;
    text-align: center;
    margin-right: 50px;
  }
}
</style>