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
                    <button @click.prevent="signUp" class="btn btn-success">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
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
            signUp(){
                //POST and receive data. If success, redirect to login page.
                //this.$router.push('/login')
                axios.post('http://localhost:3000/register', this.user).then(resp=>{
                    console.log(resp.data)
                    toastr.success(resp.data.message)
                }).catch(err=>{
                    tostr.warning(err.data.message)
                    this.clearData()
                })
                
            },
            clearData(){
                this.user.email = ``,
                this.user.password = ``
            }
        }
    }
</script>