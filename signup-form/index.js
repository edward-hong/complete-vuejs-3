import { createApp } from 'vue/dist/vue.esm-browser.js'

const app = createApp({
  template: `
    <p>{{ person }}</p>
  `,
  data() {
    return {
      msg: 'world',
      person: {
        name: 'Edward',
        age: 31,
      },
    }
  },
}).mount('#app')
