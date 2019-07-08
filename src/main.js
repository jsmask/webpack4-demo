require("./css/normal.css");

// const sum = require("./js/sum");

// let a = 10;
// let b = 20;

// console.log(sum(a, b));

import Vue from 'vue';
import App from './App.vue'

new Vue({
    el: "#app",
    template: "<App />",
    components: {
        App
    }
})