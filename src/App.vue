<template>
  <div id="app">
    <AppHeader />
    <div class="content">
      <Container>
        <router-view></router-view>
      </Container>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import Container from "./components/shared/Container.vue";
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Container,
    AppFooter,
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
}
</style>
