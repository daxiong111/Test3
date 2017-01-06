<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{msgfromfather}}</h3>
    <button @click="onClickMe">Click Me</button>
  </div>
</template>
<script>
    export default {
        data :function() {
            return {
                msg: 'hello from component a!'
            }
        },
        props:["msgfromfather"],//可以接收父组件传给子组件的内容
        methods:{
            onClickMe:function () {
              console.log(this.msgfromfather+"来自父组件");
              this.$emit("child-tell-me-sth",this.msg)
//                this.$dispatch("child-tell-me-sth",this.msg)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #42b983;
  }
</style>