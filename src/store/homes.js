export default {
  state: {
    homes: [
      {
        id: '37e00733-50b5-40fe-94ac-d25786562a8a',
        img: require('../assets/img/homes/salentina.png'),
        price: '$82',
        title: 'La Salentina, see, nature & relax',
        type: 'Entire house',
        beds: 9,
        rating: 5,
        hosts: 97
      },
      {
        id: '67e84a0b-2008-4647-a685-f68ca5737539',
        img: require('../assets/img/homes/private.png'),
        price: '$82',
        title: 'Your private 3 bedroom. riad and exclusive room',
        type: 'Entire house',
        beds: 5,
        rating: 5,
        hosts: 161
      },
      {
        id: 'b5c74a95-c3c5-49f9-a249-30c18b783ded',
        img: require('../assets/img/homes/tropical.png'),
        price: '$200',
        title: 'Dreamy Tropical Tree House',
        type: 'Entire treehouse',
        beds: 1,
        rating: 5,
        hosts: 364
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getHomes(state) {
      return state.homes
    }
  }
}