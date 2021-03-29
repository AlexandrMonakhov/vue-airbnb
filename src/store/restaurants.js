export default {
  state: {
    restaurants: [
      {
        id: '83113f18-c16b-4fe8-a023-f4886d6d5f81',
        img: require('../assets/img/restaurants/speakeasy.png'),
        subTitle: 'Speakeasy',
        title: 'Chumley’s',
        price: 60
      },
      {
        id: 'c9b4cf9b-7fc3-4e20-8883-91722c7be55a',
        img: require('../assets/img/restaurants/korean.png'),
        subTitle: 'Korean gastropub',
        title: 'Hanjan',
        price: 50
      },
      {
        id: '137e32de-4187-42cf-94c5-a1e53c77b39e',
        img: require('../assets/img/restaurants/german.png'),
        subTitle: 'German american',
        title: 'Prime Meats',
        price: 55
      },
      {
        id: '93fe223d-f99d-473a-9679-7faf2172b901',
        img: require('../assets/img/restaurants/fine.png'),
        subTitle: 'Fine seafood',
        title: 'Seaprice',
        price: 70
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getRestaurants(state) {
      return state.restaurants
    }
  },
}