<template>
  <v-app dark>
    <AppNav/>
    <v-content transition="slide-x-transition">
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
  import AppNav from '@/AppNav';

  export default {
    name: 'App',
    components: {
        AppNav
    }
};
</script>