<template>
    <div id="app">
        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    html {
        margin: 0;
        padding: 0;
        height: 100vh;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: #f4f4f4;
    }

    img {
        width: 100%;
        height: auto;
        vertical-align: top;
        content: normal !important;
    }

    [aspectratio] {
        position: relative;
    }

    [aspectratio]::before {
        content: '';
        display: block;
        width: 1px;
        margin-left: -1px;
        height: 0;
    }

    [aspectratio-content] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    [flexContainer] {
        display: flex;
        width: 750px;
    }

    [flex-center] {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    [flex-col] {
        display: flex;
        flex-direction: column;
    }

    [flex-row] {
        display: flex;
        flex-direction: row;
    }

</style>
