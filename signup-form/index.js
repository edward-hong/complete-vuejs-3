import { createApp } from 'vue/dist/vue.esm-browser.js'

const app = createApp({
  template: `
    <button v-on:click="increment(5)">Increment</button>
    <p>{{ count }}</p>

    <div v-if="isEven(count)">
      Even
    </div>
    <div v-else>
      Odd
    </div>

    <div v-for="number in evenList">
      {{ number }}
    </div>
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter(this.isEven)
    },
  },
  methods: {
    increment(val) {
      this.count += val
    },
    isEven(number) {
      return number % 2 === 0
    },
  },
}).mount('#app')

window.app = app
