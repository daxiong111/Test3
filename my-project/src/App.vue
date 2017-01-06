<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
        <li v-for="item in items" :class="{finished:item.isFinished}" @click="toggleFinish(item)">
            {{item.label}}
        </li>
    </ul>
    <p>child tells me:{{childWords}}</p>
    <component-a msgfromfather="you die!" v-on:child-tell-me-sth="listenToMyBoy"></component-a>
  </div>
</template>

<script>
import Store from "./stores";
import ComponentA from "./components/componentA";
console.log(Store);
export default {
    data:function(){
        return{
            title:"this is a todo list",
            items:Store.fetch(),
            newItem:"",
            childWords:""
        }
    },
//    components:{componentA},
    components: { ComponentA },//ComponentA必须大写
    watch:{
        items:{
            handler:function(items){
                Store.save(items)
            },
            deep:true
        }
    },
    events:{
        "child-tell-me-sth":function(msg){
            this.childWords=msg;
            console.log(msg+"来自子组件")
        }
    },
    methods:{
        toggleFinish:function(item){
            item.isFinished=!item.isFinished;
        },
        addNew:function(){
            console.log(this.newItem);
            this.items.push({
                label:this.newItem,
                isFinished:false
            });
            this.newItem=""
        },
        listenToMyBoy:function (msg) {
            this.childWords=msg;
            console.log(msg+"来自子组件")
        }
    }
}
</script>
<style>
.finished{
    text-decoration:underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
