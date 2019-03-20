<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Вход в аккаунт</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert :value="error" type="warning">
                            {{error}}
                        </v-alert>
                        <v-form>
                            <v-text-field prepend-icon="person" name="login" label="e-mail" type="email" required v-model="name" :rules="emailRules"></v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" required v-model="password"
                                          :rules="passwordRules"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click.prevent="signin" :disabled="processing || valid">Войти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <!--<form>
        <input type="text" name="name">
        <input type="password" name="psw">
        <button type="submit">GO</button>
        </form>-->
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                name:'',
                password:'',
                passwordRules: [
                    v => !!v || 'Введите пароль',
                    v => (v && v.length>=6) || 'Слишком короткий пароль'
                ],
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
