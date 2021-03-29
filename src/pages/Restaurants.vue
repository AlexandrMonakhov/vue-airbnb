<template>
  <div class="restaurants">
    <div class="restaurants__header">
      <h1 class="title">Popular reservations around the world</h1>
      <span class="see">See all &rsaquo;</span>
    </div>

    <div class="restaurants-cards">
      <div class="restaurants-card" 
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
      >
        <img class="restaurants-card__preview" :src="restaurant.img" :alt="restaurant.subTitle">

        <div class="restaurants-card-info">
          <span class="restaurants-card-info__sub-title">{{ restaurant.subTitle }}</span>
          <span class="restaurants-card-info__title">{{ restaurant.title }}</span>
          <span class="restaurants-card-info__price">About ${{ restaurant.price }} per person</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  data: () => ({
    restaurants: null
  }),
  created() {
    this.restaurants = this.$store.getters.getRestaurants
  }
}
</script>
