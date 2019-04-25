<template>
  <div id="app">
    <v-app id="inspire">
      <div class="codemirror">
        <codemirror v-model="code"/>
      </div>
      <v-btn @click="getData" color="success">Run</v-btn>
      <v-data-table
        :headers="headers"
        :items="results"
        :loading="loading"
        :rows-per-page="rowsPerPage"
        class="elevation-1">
        <template v-slot:items="props">
          <td v-bind:key="field" v-for="field of props.item">{{ field }}</td>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
  import axios from 'axios';

  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/theme/solarized.css'
  import 'codemirror/theme/base16-dark.css'
 
  export default {
    data: () => ({
      headers: [],
      results: [],
      rowsPerPage : "-1",
      loading : false,
      code : `-- Simple Test
SELECT CURRENT_USER FROM DUMMY;
`
    }),
    methods: {
      getData: function(){
        axios.post(process.env.VUE_APP_HANA_SQL_SANDBOX_BACKEND + '/api/sql/',{
          sql : this.code
        }).then(res=>{
          this.loading=false;
          this.headers = [];
          if(res.data && res.data.length>0){
            let row = res.data[0];
            for(var field in row) this.headers.push({text: field, value: field});
          }
          this.results = res.data;
        }, err=> {
          this.loading = false;
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