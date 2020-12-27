<template>
  <div class="cards">
    <div class="card" v-for="starter in starters">
      <div class="title">{{ starter.name }}</div>
      <div class="content">
        <img :src="starter.sprite" />
      </div>
      <div class="description">
        <div v-for="type in starter.types">
          {{ type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
  created() {
    this.fetchData()
  },

  data() {
    return {
      starters: [],
    }
  },

  methods: {
    async fetchData() {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`)),
      )
      const data = await Promise.all(responses.map((res) => res.json()))
      this.starters = data.map((datum) => ({
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map((type) => type.type.name),
      }))
    },
  },
}
</script>

<style scoped>
.cards {
  display: flex;
}

.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}

img {
  width: 100%;
}

.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

.title,
.content {
  border-bottom: 1px solid silver;
}
</style>
