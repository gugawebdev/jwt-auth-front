<template>
    <div>
        <h1>That's the user page!</h1>
        <h1>{{user._id}}</h1>
        <h1>{{user.username}}</h1>
        <button @click="testUser">Test</button>
    </div>
</template>

<script>
    import {store} from '../../store.js'
    import axios from 'axios'
    export default{
        data(){
            return{
                user: store.state.user
            }
        },
        methods:{
            testUser(){
                axios.get('http://localhost:3000/dashboard', {headers: {Authorization: localStorage.getItem('token')}}).then(resp=>{
                     console.log(resp.data)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        mounted(){
            console.log(localStorage.getItem('token'))
        }
    }
</script>

<style>
    
</style>