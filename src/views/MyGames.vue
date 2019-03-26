<template>
    <v-container>
        <h1>MY GAMES LIST</h1>
            <v-card class="side_toolbar">
                <v-card-title>Filters</v-card-title>
                {{filters}}
                <v-card-text>
                    <v-checkbox v-model="filters" label="Installed" value="Installed"></v-checkbox>
                    <v-checkbox v-model="filters" label="Favourite" value="Favourite"></v-checkbox>
                    <v-checkbox v-model="filters" label="Uninstalled" value="Uninstalled"></v-checkbox>
                    <v-checkbox v-model="filters" label="Hidden" value="Hidden"></v-checkbox>
                </v-card-text>
                <v-card-title>Platforms</v-card-title>
                {{platforms}}
                <v-card-text>
                    <v-checkbox v-model="platforms" label="Steam" value="Steam"></v-checkbox>
                    <v-checkbox v-model="platforms" label="GOG" value="GOG"></v-checkbox>
                    <v-checkbox v-model="platforms" label="Uplay" value="Uplay"></v-checkbox>
                    <v-checkbox v-model="platforms" label="Origin" value="Origin"></v-checkbox>
                </v-card-text>
            </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "MyGames",
        data(){
            return{
                filters:[],
                platforms:[]
            }
        }
    }
</script>

<style scoped>
.side_toolbar{
    height: 100%;
    position: fixed;
    right: 0;
    top: 24px;
    width: 15%;
    background-color: rgba(8, 8, 15, 0.8);
    color: rgba(177, 175, 173, 0.8);
}
</style>
