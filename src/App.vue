<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Todo />
    <Counter />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Todo from "./components/Todo.vue";

@Component({
  components: {
    HelloWorld,
    Counter,
    Todo,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
