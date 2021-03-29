<template>
  <div class="experiences">
    <div class="experiences__header">
      <h1 class="title">Experiences</h1>
      <span class="see">See all &rsaquo;</span>
    </div>

    <div class="experiences-cards">
      <div class="experiences-card" 
        v-for="experienceCard in experiencesCard" 
        :key="experienceCard.id"
      >
        <img class="experiences-card__preview" :src="experienceCard.img" :alt="experienceCard.title">
        <div class="experiences-card-info">
          <span class="experiences-card-info__price">{{ experienceCard.price }}</span>
          <span class="experiences-card-info__place">{{ experienceCard.title }}</span>
        </div>
        <div class="experiences-card-rating">
          <img class="experiences-card-rating__image" src="@/assets/img/star.svg"
          :alt="'Rating ' + experienceCard.rating"
            v-for="(rate, index) in experienceCard.rating"
            :key="index"
          >
          <span class="experiences-card-rating__reviews">{{ experienceCard.reviews }} reviews</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    experiencesCard: null
  }),
  created() {
    this.experiencesCard = this.$store.getters.getExperiencesCard
  }
}
</script>
