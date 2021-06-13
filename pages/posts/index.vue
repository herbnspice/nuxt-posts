<template>
    <div>
        <h1> Making API request the VUE way </h1>
        <div class="containers">
            <Cards :posts="post" v-for="post in posts" :key="post.id" /> 
            
        </div>
      </div>
</template>
<script>
import axios from 'axios'
import Cards from '@/components/Cards'


export default {
    data(){
        return{
            posts: ''
        }
    },
    components: [
        Cards
    ],
   
    async asyncData( context ){
        let res = await  axios.get('https://jsonplaceholder.typicode.com/todos')
        return { posts : res.data } 
    },
    head:{
        title : 'List of Posts'
    }
}
</script>