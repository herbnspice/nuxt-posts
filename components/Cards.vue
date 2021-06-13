<template>
    <div class="card bg-light mb-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text"></p>
            <nuxt-link class="btn btn-primary" :to="{ name : 'posts-id' , params:{id: post.id} }"> View post </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'post' ]
}
</script>