<template>
    <v-toolbar app color="blue darken-4" dark>
        <!-- For future use
        <v-toolbar-side-icon></v-toolbar-side-icon>
        -->
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        <template v-for="(item,index) in items">
            <!--https://github.com/vuejs/vue/issues/8390 - Ternary operators not possible :(
            <v-btn :key=index flat :to="'/' + typeof item.link !='undefined'?item.link:item.title">{{item.title}}</v-btn>
            -->
            <v-btn v-if="typeof item.link === 'undefined'" :key=index flat :to="'/' + item.title">{{item.title}}</v-btn>
            <v-btn v-else :key=index flat :to="'/' + item.link">{{item.title}}</v-btn>
        </template>
        <v-spacer />
        <v-chip color="primary" label outline text-color="white">{{systemInformation.user}}@{{systemInformation.server}}:{{systemInformation.port}}</v-chip>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppNav',
    props : {
        systemInformation : Object
    },
    data(){
        return{
            appTitle: 'HANA Sandbox',
            drawer: false,
            items: [
                { title: 'Overview',link: '' },
                { title: 'SQL',link: 'sql' }
            ]
        };
    }
};
</script>

<style scoped>
</style>