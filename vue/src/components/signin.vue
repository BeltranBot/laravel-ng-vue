<template lang="html">
  <form @submit.prevent="onSignin">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        v-model="user.email"
        class="form-control" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="user.password"
        class="form-control" required>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSignin () {
        axios.post('http://localhost:8000/api/user/signin',
          { email: this.user.email, password: this.user.password },
          {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
          .then((response) => {
            localStorage.setItem('token', response.data.token)
          })
          .catch((error) => console.log(error))
      }
    }
  }
</script>

<style lang="css">
</style>
