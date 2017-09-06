<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <label for="email">Email(username):</label>
                        <input type="email" name="email" class="form-control" v-model="user.email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" name="password" class="form-control" v-model="user.password">
                    </div>
                    <button @click.prevent="signIn" class="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {store} from '../../store.js'
    import toastr from 'toastr'
    export default{
        data(){
            return {
                user:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            signIn(){
                //POST and receive data. If success, trigger the login dispatcher.
                axios.post('http://localhost:3000/login', this.user).then(resp=>{
                        if(resp.data.success == true){
                            toastr.success('Succesfully logged in.')
                            localStorage.setItem('token', resp.data.token)
                            store.commit('LOGIN', resp.data.user)
                            this.$router.push('/dashboard')
                        } else{
                            toastr.warning(resp.data.message)
                            this.clearData()
                        }
                }).catch(err=>{
                    toastr.warning('Authentication failed.')
                    this.clearData()
                })
            },
            clearData(){
                this.user.email = '',
                this.user.password = ''
            }
        }
    }
</script>

<style>
    
</style>