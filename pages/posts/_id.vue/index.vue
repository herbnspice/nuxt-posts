<template>
    <div class="container row">
        <h1>{{ post.title}}</h1>
        <pre> {{ post.body }}</pre>
        <nuxt-link to="/posts" class="btn btn-primary"> Back to posts </nuxt-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            post: ''
        }
    },
    async asyncData( { params } ){
        let res = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        return { post : res.data } 
    },
    head(){
        return {
            title : this.post.title
        }
    }
}
</script>