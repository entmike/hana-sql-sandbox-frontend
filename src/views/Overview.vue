<template>
  <div>
    <v-chip color="primary" text-color="white">{{results.backend_information.user}}@{{results.backend_information.server}}:{{results.backend_information.port}}</v-chip>
    <v-list two-line>
      <template v-for="(item,index) in results.M_SYSTEM_OVERVIEW">
        <v-list-tile :key="index">
          <v-list-tile-content>
            <v-list-tile-title v-html="item.KEY"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.VAL"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Overview',
  data: () => ({
    results: []
  }),
  components: {},
  methods: {
    getData: function(){
      axios.post(process.env.VUE_APP_HANA_SQL_SANDBOX_BACKEND + '/api/overview/',{ }).then(res=>{
        if(res.data){
          this.results = res.data;
        }else{
          this.results = {};
        }
      }, err=> {
        alert(JSON.stringify(err.response.data));
      }).catch(err=>{
        alert(`An error occured communicating with the backend.
        ${err}`);
      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>
