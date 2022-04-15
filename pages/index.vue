<template>
  <div>
    <Header />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Header from '../components/Header.vue';
import Login from '../components/Login.vue';

export default defineComponent({
  components: {
    Header,
    Login
  },
  setup() {
    
  },
})
</script>

<style>
* {
  background-color: #EBECF0;
}
body {
  padding: 24px;
}
</style>