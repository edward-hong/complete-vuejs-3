<template>
  <MyInput
    name="Username"
    :rules="{ required: true, min: 5 }"
    :value="username.value"
    @update="update"
  />
  <MyInput
    name="Password"
    :rules="{ required: true, min: 10 }"
    :value="password.value"
    @update="update"
  />

  <MyButton color="white" background="darkslateblue" :disabled="!valid" />
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      valid: true,
      username: { value: '', valid: false },
      password: { value: '', valid: false },
    }
  },
  methods: {
    update(payload) {
      this[payload.name.toLowerCase()].value = payload.value
    },
  },
}
</script>

<style>
body {
  font-family: Arial;
}
</style>
