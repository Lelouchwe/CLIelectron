<template>
<!-- <div class="title_bar">
    <div class="name_app">
    <p>agregator</p>
    </div>
    <div class="windows_control_container">
    <button id="minimize-button" class="minimize-button"/>
    <button id="minmax-button" class="minmax-button"/>
    <button id="close-button" class="close-button"/>
    </div>
</div> -->
<div class="title_bar">
      <div class="name_app">
      <p>agregator</p>
      </div>
      <div class="windows_control_container">
     <!-- <button id="minimize-button" class="minimize-button"/>  -->
        <button id="minimize-button" class="minimize-button">
            <span></span>
        </button>
        <!-- <button id="minmax-button" class="minmax-button"></button>  -->
        <button id="minmax-button" class="minmax-button">
            <span></span>
        </button>
        <!-- <span id="close-button" class="close-button"> </span>  -->
        <button id="close-button" class="close-button">
            <span></span>
        </button>
      </div>
    </div>

</template>
<script>
export default {
        name: "titlebar"
}
//     const {remote} = require('electron')

//     document.getElementById('minimize-button').addEventListener('click', () => {
//     remote.getCurrentWindow().minimize()
//     })
//     document.getElementById('minmax-button').addEventListener('click', () => {
//     const CurrentWindow = remote.getCurrentWindow()
//     if (CurrentWindow.isMaximized()) {
//         CurrentWindow.unmaximize()
//     } else {
//         CurrentWindow.maximize()
//     }
// })
// document.getElementById('close-button').addEventListener('click', () => {
//     remote.app.quit()
// })


</script>
<style >
body {
    margin: 0;
    width: 100%;
    height: 100%;
}
.title_bar {
    -webkit-app-region: drag;
    margin: 0;
    display: flex;
    background-color: black;
    width: 100%;
    height: 30px;
    position: fixed;
    overflow: hidden;
}
.name_app {
    position: relative;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
.name_app p {
    color: white;
    font-size: 17px;
    letter-spacing: 0.1em;
    margin: 0 auto;
}
.windows_control_container {
    position: relative;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    right: 0;
    top: 0;
    flex-grow: 1;
    /* float: left; */
    
}
.windows_control_container button {
    -webkit-app-region: no-drag;
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    

}
.windows_control_container minimize-button {

}
.windows_control_container minmax-button {
    
}
.windows_control_container close-button {
    
}
</style>
