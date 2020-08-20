<template>
  <div>
    <h2>Counter</h2>
    <span>{{counter}}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../store/mutation-types";
@Component({
  computed: mapState({ counter: "count" }),
  methods: mapMutations({
    increment: INCREMENT_COUNTER,
    decrement: DECREMENT_COUNTER,
  }),
})
export default class Counter extends Vue {
  counter!: number;
}
</script>