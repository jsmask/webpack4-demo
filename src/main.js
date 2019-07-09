import Vue from 'vue';
import App from './App.vue'

require("./css/normal.css");

new Vue({
    render: h => h(App)
}).$mount("#app")


// new Vue({
//     el: "#app",
//     template: "<App />",
//     components: {
//         App
//     }
// })