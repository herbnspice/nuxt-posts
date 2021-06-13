<template>
    <div>
        <h1> Making API request the VUE way </h1>
        <div class="container row" v-if="posts.length > 0 ">
            <Cards :post="post" v-for="post in posts" :key="post.id" class="ml-auto mr-auto" /> 

            <button class="btn-success btn" v-scroll-to="'body'">
                Scroll to top
            </button>
        </div>
      </div>
</template>
<script>
import axios from 'axios'
import Cards from '@/components/Cards'
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            post: ''
        }
    },
    components: [
        Cards
    ],
    computed: { 
        ...mapGetters(
            ['posts']
        )
        
    },
    // async fetch( { store } ){

    //     let res = await  axios.get('https://jsonplaceholder.typicode.com/posts')
    //     store.dispatch('setPosts',  res.data )
    // },
    head:{
        title : 'List of Posts'
    }
}
</script>