<template>
  <Container>
    <slot name="title"></slot>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" :apartment="apartment"></slot>
      </template>
    </div>
  </Container>
</template>

<script>
import Container from "../shared/Container.vue";

export default {
  name: "ApartmentsList",
  components: { Container },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}
</style>
