<template>
  <div id="app">
    <!-- Sidebar -->
    <aside>
      <router-link to="/bar-graph">Bar Graph</router-link>
      <router-link to="/pie-chart">Pie Chart</router-link>
    </aside>

    <!-- Main -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;

  aside {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    background: #42b983;
    height: 100vh;
    overflow: hidden;
  }

  main {
    flex: 1;
    overflow: auto;
    padding: 50px 20px;
  }
}
</style>
