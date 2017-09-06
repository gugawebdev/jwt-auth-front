<template>
    <div>
        <h1 class="text-center">This is the home page</h1>
        <h1 class="text-center">{{msg}}</h1>
        <router-link to="/register">Registration</router-link>
        <router-link to="/login">Login</router-link>
        <button @click="dash">dashboard</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'Hello,world'
            }
        },
        methods:{
            dash(){
                this.$router.push('/dashboard')
            }
        }
    }
</script>

<style>
    
</style>