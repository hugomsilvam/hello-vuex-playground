<template>
  <div>
    <h2>Todos</h2>
    <p>Done Todos ({{doneTodosCount}})</p>
    <ul>
      <li v-for="(todo, index) in doneTodos" :key="index">{{todo}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import TodoModel from "../models/TodoModel";

@Component({ computed: { ...mapGetters(["doneTodos", "doneTodosCount"]) } })
export default class Todo extends Vue {
  doneTodos!: Array<TodoModel>;
  doneTodosCount!: number;
}
</script>