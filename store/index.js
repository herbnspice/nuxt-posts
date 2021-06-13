
import axios from 'axios'

// Create a astore
export const state = () =>{
    posts : {}
}


// Create getters 
export const getters = {
    posts(state ){
        return state.posts
    }
}

// Mutations 
export const mutations = {
    SET_POSTS( state, posts ){
        state.posts =  posts
    }
}

export const actions = {
    async nuxtServerInit( { commit }) {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit("SET_POSTS", data)

    },
}