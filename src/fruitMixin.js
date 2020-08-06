export const fruitMixin = {
  data() {
    return {
      text: 'Hello there!',
      filterText: '',
      fruits: ['Star apple', 'Durian', 'Buko', 'Bayabas']
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  }
}
