<template>
  <main class="apartment-page">
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";

import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/AprtmentsOwner.vue";
import Reviews from "../components/reviews/index.vue";
import reviewsList from "../components/reviews/rewiews.json";
import { getApartmentsById } from "../services/apartments.service";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsById(this.$route.params.id);
      this.apartment = data;
    } catch (error) {
      console.log("🚀 ~ file: Apartment.vue:49 ~ created ~ error:", error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
