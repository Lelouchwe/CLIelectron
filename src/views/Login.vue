<template>
    <div>
        <form>
        <input type="text" name="name">
        <input type="password" name="psw">
        <button type="submit">GO</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login"
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
