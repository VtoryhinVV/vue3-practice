<template>
  <ApartmentsFilterForm class="apartments-filter" @submitForm="filter" />
  <p v-if="!filteredApartments.length">Ничего не найдено</p>
  <ApartmentsList v-else :items="filteredApartments">
    <template v-slot:apartment="{ apartment }">
      <ApartmentsItem
        :key="apartment.id"
        :id="apartment.id"
        :descr="apartment.descr"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
        :price="apartment.price"
      />
    </template>
  </ApartmentsList>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";

import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import Container from "../components/shared/Container.vue";
import AppFooter from "../components/Footer.vue";
import AppHeader from "../components/Header.vue";
import { getApartmentsList } from "../services/apartments.service";

export default {
  name: "Homepage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      text: "",
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.log("🚀 ~ file: Homepage.vue:58 ~ created ~ error:", error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
