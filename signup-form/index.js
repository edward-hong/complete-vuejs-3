import { createApp } from 'vue/dist/vue.esm-browser.js'

const Hello = {
  template: `
    <h3>Hello from component</h3>
  `,
}

const app = createApp({
  components: {
    Hello,
  },
  template: `
    <Hello />
    <button @click="increment(5)">Increment</button>
    <p>{{ count }}</p>

    <div v-if="isEven(count)">
      Even
    </div>
    <div v-else>
      Odd
    </div>

    <div v-for="number in numbers">
      <div :class="getClass(number)" :title="number">
        {{ number }}
      </div>
    </div>

    <input type="checkbox" v-model="value" value="a" />
    <input type="checkbox" v-model="value" value="b" />
    {{ value }}
  `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: ['a'],
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter(this.isEven)
    },
    error() {
      if (this.value.length < 7) {
        return 'Too short'
      }
    },
  },
  methods: {
    input($evt) {
      this.value = $evt.target.value
    },
    getClass(number) {
      if (this.isEven(number)) {
        return 'red'
      }
      return 'blue'
    },
    increment(val) {
      this.count += val
    },
    isEven(number) {
      return number % 2 === 0
    },
  },
}).mount('#app')

window.app = app
