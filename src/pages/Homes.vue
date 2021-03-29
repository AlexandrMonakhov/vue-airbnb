<template>
  <div class="homes">
    <div class="homes__header">
      <h1 class="title">Homes</h1>
      <span class="see">See all &rsaquo;</span>
    </div>

    <div class="homes-cards">
      <div class="homes-card" 
        v-for="home in homes" 
        :key="home.id"
      >
        <img class="homes-card__preview" :src="home.img" :alt="home.title">
        <div class="homes-card-info">
          <span class="homes-card-info__price">{{ home.price }}</span>
          <span class="homes-card-info__title">{{ home.title }}</span>
        </div>
        <div class="homes-card-house">
          <span class="homes-card-house__type">{{ home.type }}</span>
          <span class="homes-card-house__beds"> · {{ home.beds }} beds</span>
        </div>
        <div class="homes-card-rating">
          <img class="homes-card-rating__image" src="@/assets/img/star.svg"
          :alt="'Rating ' + home.rating"
            v-for="(rate, index) in home.rating"
            :key="index"
          >
          <span class="homes-card-rating__reviews">{{ home.hosts }} · Superhost</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    homes: null
  }),
  created() {
    this.homes = this.$store.getters.getHomes
  }
}
</script>
