<template>
  <MyInput name="Username" />

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
    }
  },
}
</script>

<style>
body {
  font-family: Arial;
}
</style>
