<template>
  <div id="app">
    <v-app id="inspire">
      <div class="codemirror">
        <codemirror v-model="code"/>
      </div>
      <v-btn @click="getData" color="success" >Run</v-btn>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :loading="loading"
        :rows-per-page="rowsPerPage"
        class="elevation-1">
        <template v-slot:items="props">
          <td v-for="field of props.item">
            {{ field }}
          </td>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
  import axios from 'axios';
  import codemirror from 'vue-codemirror'
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/theme/solarized.css'
  import 'codemirror/theme/base16-dark.css'
 
  export default {
    data: () => ({
      headers: [],
      desserts: [],
      rowsPerPage : "-1",
      loading : false,
      code : `-- SQL Statement
SELECT SCHEMA_NAME, TABLE_NAME, RECORD_COUNT FROM M_TABLES ORDER BY RECORD_COUNT DESC
`
    }),
    methods: {
      getData: function(e){
        axios.post("http://localhost:9999/api/top-tables/",{
          sql : this.code
        }).then(res=>{
          this.loading=false;
          this.headers = [];
          if(res.data && res.data.length>0){
            let row = res.data[0];
            for(var field in row) this.headers.push({text: field, value: field});
          }
          this.desserts = res.data;
        }, err=> {
          this.loading = false;
          alert(JSON.stringify(err.response.data));
        }).catch(err=>{
          
        })
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style>
.CodeMirror {
  height: 150px;
}
</style>
