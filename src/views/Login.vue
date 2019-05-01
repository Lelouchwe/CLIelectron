<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card color="#202225" class="elevation-12" dark>
                    <v-card-title>{{title}}</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-alert :value="error" type="warning">
                            {{error}}
                        </v-alert>
                        <v-form v-on:submit.prevent="Login">
                            <v-text-field prepend-icon="mail" name="email" label="e-mail" type="email" required v-model="name" :rules="emailRules"></v-text-field>
                            <v-text-field v-show="reg" prepend-icon="person" name="login" label="login" type="text" required v-model="login"></v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" required v-model="password"
                                          :rules="passwordRules"></v-text-field>
                            <v-text-field v-show="reg" id="password" prepend-icon="lock" name="password" label="Confirm password" type="password" required v-model="password"
                                          :rules="passwordRules"></v-text-field>
                            <v-btn v-show="!reg" color="indigo" :disabled="processing || valid" dark type="submit">Sing In</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat v-show="reg" color="secondary" @click.prevent="goToLogin" :disabled="processing || valid">Log In</v-btn>
                        <v-btn v-show="!reg" color="indigo" :disabled="processing || valid" dark type="submit">Sing In</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn v-show="!reg" flat color="secondary" @click.prevent="goToReg" :disabled="processing || valid">Registration</v-btn>
                        <v-btn v-show="reg" color="indigo" :disabled="processing || valid" dark>Sing Up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import EventBus from '../components/EventBus'

    export default {
        name: "Login",
        data(){
            return{
                name:'',
                password:'',
                login:'',
                title:'Log In',
                reg:false,
                passwordRules: [
                    v => !!v || 'Введите пароль',
                    v => (v && v.length>=6) || 'Слишком короткий пароль'
                ],
            }
        },
        methods:{
            Login(){
                axios.post('http://localhost:5000/users/login/', {
                    email: this.name,
                    password: this.password,
                }).then(res => {
                    localStorage.setItem('usertoken', res.data)
                    this.name = ''
                    this.password = ''
                    // router.push({ name: ''})

                }).catch(err => {
                    console.log(err)
                })
                this.emitMethod()
            },
            emitMethod() {
                EventBus.$emit('logged-in', 'loggedin')
            },
            goToReg(){
                this.reg = true;
                this.title = 'Sing Up';
            },
            goToLogin(){
                this.reg = false;
                this.title = 'Log In';
            }
        }
    }
</script>

<style scoped>
form{
    padding: 3%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
input{
    color: black;
    height: 20px;
    margin-bottom: 3%;
}

</style>
