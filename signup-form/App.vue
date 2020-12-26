<template>
  <MyInput name="Username" :rules="{ required: true, min: 5 }" />
  <MyInput name="Password" :rules="{ required: true, min: 10 }" />

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
