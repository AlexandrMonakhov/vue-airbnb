export default {
  state: {
    card: [
      {
        id: '094c981a-fed2-4b0b-8a68-6e8abf7ea147',
        img: require('../assets/img/preview/homes.png'),
        title: 'Homes',
        url: '/homes'
      },
      {
        id: '4b9038a4-23fb-4942-804e-8a07a8db3b33',
        img: require('../assets/img/preview/experiences.png'),
        title: 'Experiences',
        url: '/experiences'
      },
      {
        id: '01674330-7110-4bdc-9220-c900c96598e2',
        img: require('../assets/img/preview/restaurants.png'),
        title: 'Restaurants',
        url: '/restaurants'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getCards(state) {
      return state.card
    }
  },
}