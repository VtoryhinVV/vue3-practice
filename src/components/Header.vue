<template>
  <header class="header">
    <Container>
      <Logo @click="$router.push('/')" />
    </Container>
  </header>
</template>

<script>
import Container from "./shared/Container.vue";
import Logo from "./Logo.vue";

export default {
  name: "Header",
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.header {
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  margin-bottom: 15px;
}
</style>
