<template>
    <div class="title_bar">
      <div class="name_app">
      <p>Super</p>
      </div>
      <div class="windows_control_container">
     <!-- <button id="minimize-button" class="minimize-button"/>  -->
        <button id="minimize-button" class="minimize-button" v-on:click.once="minimize">
            <span></span> 
        </button>
        <!-- <button id="minmax-button" class="minmax-button"></button>  -->
        <button id="minmax-button" class="minmax-button" v-on:click.once="minmax">
            <span></span>
        </button>
        <!-- <span id="close-button" class="close-button"> </span>  -->
        <button id="close-button" class="close-button" v-on:click.once="close">
            <span></span>
        </button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "toolbar",
        methods:{
            async minimize () {
              const {remote} = require('electron')

            await document.getElementById('minimize-button').addEventListener('click', () => {
                remote.getCurrentWindow().minimize()
                })
            },
             async minmax(){
              const {remote} = require('electron')
             await document.getElementById('minmax-button').addEventListener('click', () => {
                const CurrentWindow = remote.getCurrentWindow()
                if (CurrentWindow.isMaximized()) {
                    CurrentWindow.unmaximize()
                } else {
                    CurrentWindow.maximize()
                }
            })
            },
            async close () {
              const {remote} = require('electron')
              document.getElementById('close-button').addEventListener('click', () => {
                remote.app.quit()
            })
            }
        }
    }
 
</script>

<style scoped>
     body {
    margin: 0;
    width: 100%;
    height: 100%;
}
.title_bar {
  -webkit-app-region: drag;
  margin: 0;
  display: flex;
  background-color: #1a1d21;
  width: 100%;
  height: 24px;
  position: fixed;
  overflow: hidden;
}
.name_app {
  position: relative;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 2px;
}
.name_app p {
  color: white;
  font-size: 16px;
  letter-spacing: 0.1em;
  margin: 0 auto;
  padding-left: 10px;
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
  outline: none;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor:default;


}
.windows_control_container #minimize-button {
  /* background: url('../src/assets/min.png') */
  position: absolute;
  width: 45px;
  height: 30px;
  z-index: 10;
  right: 94px;

}
.windows_control_container .minimize-button span
{
  position: absolute;
  top: 46%;
  width: 12px;
  height: 1px;
  right: 16px;
  background-color: #f0f0f0;


}
.windows_control_container #minmax-button {
  /* background: url('../src/assets/minmax.png'); */
  /* margin-right: 40px; */
  position: absolute;
  width: 45px;
  height: 30px;
  z-index: 10;
  right: 46px;

}
.windows_control_container .minmax-button span
{
  position: absolute;
  top: 46%;
  width: 15px;
  height: 2px;
  right: 15px;
  background-color: #f0f0f0;

}
.windows_control_container #close-button {
  /* background: url('../src/assets/close.png') no-repeat; */
  position: absolute;
  width: 45px;
  height: 30px;
  z-index: 10;

}
.windows_control_container #close-button:hover{
  background-color: rgba(255, 0, 0, 0.527);
}
.windows_control_container #minmax-button:hover,
.windows_control_container #minimize-button:hover{
  background-color: rgba(114, 109, 109, 0.527);
}
.windows_control_container .close-button span,
.windows_control_container .close-button span::before,
.windows_control_container .close-button span::after
{
  position: absolute;
  top: 45%;
  width: 13px;
  height: 1px;
  background-color: #b7b6b6;
  right: 28%;

}
.windows_control_container .close-button span {
  /* transform: rotate(90deg); */
  height: 0;
}
.windows_control_container .close-button span::before {
  content: '';
  display: block;
  transform: rotate(-45deg);

}
.windows_control_container .close-button span::after{
  content: '';
  display: block;
  transform: rotate(45deg);
}
</style>
