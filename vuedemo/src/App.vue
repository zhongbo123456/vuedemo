<template>
  <div id="app">
    <login></login>
    <router-view></router-view>
  </div>
</template>

<script>
  import login from './components/login'
  export default {
    name: 'app',
    components: {
      'login': login
    }
  }
</script>



