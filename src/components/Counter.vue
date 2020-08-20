<template>
  <div>
    <h2>Counter</h2>
    <span>{{counter}}</span>
    <button @click="increment">+</button>
    <button @click="asyncIncrement">lazy +</button>
    <button @click="promiseIncrement">promise +</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../store/mutation-types";
import {
  ASYNC_INCREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER_PROMISE,
} from "../store/action-types";
@Component({
  computed: mapState({ counter: "count" }),
  methods: mapMutations({
    increment: INCREMENT_COUNTER,
    decrement: DECREMENT_COUNTER,
  }),
})
export default class Counter extends Vue {
  counter!: number;
  asyncIncrement() {
    this.$store.dispatch(ASYNC_INCREMENT_COUNTER);
  }
  promiseIncrement() {
    this.$store.dispatch(ASYNC_INCREMENT_COUNTER_PROMISE);
  }
}
</script>

<style>
button {
  margin: 10px;
}
</style>