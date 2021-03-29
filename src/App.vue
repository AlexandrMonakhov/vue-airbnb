<template>
  <div class="container">
    <header class="header">
      <div class="header-left">
        <img class="header__logo" src="@/assets/img/logo.svg" alt="Logo: Airbnb">
        <input class="input header__input" type="text" placeholder='Try "Miami"'>
      </div>
      <nav class="header-right">
        <router-link 
          class="header__link"
          v-for="(link, index) in links" 
          :key="index" 
          :to="link.url"
        >{{ link.title }}</router-link>
      </nav>
    </header>

    <div class="home">
      <h1 class="title">Explore Airbnb</h1>

      <div class="filter">
        <router-link 
          :to="card.url" 
          class="filter-card" 
          v-for="card in cards" 
          :key="card.id"
        >
          <img class="filter-card__image" :src="card.img" :alt="card.title">
          <span class="filter-card__title">{{ card.title }}</span>
        </router-link>
      </div>

    </div>

    <router-view></router-view>

    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Become a host', url: '/host' },
      { title: 'Help', url: '/help' },
      { title: 'Sign Up', url: '/sign' },
      { title: 'Log In', url: '/login' },
    ],
    cards: null
  }),
  created() {
    this.cards = this.$store.getters.getCards
  }
}
</script>

<style lang="scss">

</style>
