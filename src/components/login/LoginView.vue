<template>
  <div>
    <Backg>
      <Form></Form>
    </Backg>
  </div>
</template>

<script>
import Backg from '@/components/BackgView.vue'
import Form from '@/components/login/LoginForm.vue'
export default {
  components: {
    Backg,
    Form
  },
  methods: {}
}
</script>

<style scope>
h2 {
  text-align: center;
}
</style>
