<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{author}}</p>
        <Home></Home>
    </div>
</template>

<script>
    import Home from './views/Home'
    export default {
        name:"app",
        components:{Home},
        data(){
            return {
                title:"Hello World",
                author:"Mask"
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
p{
    font-size: 18px;
    color: #f2d322;
}
</style>