export default {
  state: {
    experiencesCard: [
      {
        id: '1d425a70-5650-424d-a8b4-f05534473084',
        img: require('../assets/img/experiences/forest.png'),
        price: '$29',
        title: 'Forest therapy',
        rating: 5,
        reviews: 44
      },
      {
        id: 'b3e907a7-d144-455e-8d5c-11597aef4133',
        img: require('../assets/img/experiences/whale.png'),
        price: '$69',
        title: 'Whale watching',
        rating: 5,
        reviews: 46
      },
      {
        id: 'd3b4ade0-e3c2-4967-bc71-7cdfde7cde1d',
        img: require('../assets/img/experiences/mountain.png'),
        price: '$69',
        title: 'Table Mountain Summit, Cable Car Down',
        rating: 5,
        reviews: 44
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getExperiencesCard(state) {
      return state.experiencesCard
    }
  },
}