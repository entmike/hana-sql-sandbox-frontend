<template>
  <v-app dark>
    <AppNav :systemInformation="results.backend_information"/>
    <v-content transition="slide-x-transition">
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
  import AppNav from '@/AppNav';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
        AppNav
    },
    data () {
      return {
        results: {
          backend_information : {
            user : 'dummy'
          }
        }
      };
    },
    methods : {
      getData (){
        axios.post(process.env.VUE_APP_HANA_SQL_SANDBOX_BACKEND + '/api/overview/',{ }).then(res=>{
          if(res.data){
            this.results = res.data;
            this.systemInformation = res.data.backend_information;
            console.log(this.results);
          }else{
            alert(JSON.stringify(res));
            this.results = {};
          }
        }, err=> {
          alert(JSON.stringify(err.response.data));
        }).catch(err=>{
          alert(`An error occured communicating with the backend.
          ${err}`);
        })
      },
    },
    watch : {
      results(v){
        // alert(JSON.stringify(v));
      }
    },
    mounted(){
        this.getData();
    }
};
</script>