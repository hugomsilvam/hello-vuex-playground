<template>
  <div>
    <span>{{count}}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { mapState } from "vuex";
@Component({
  computed: mapState(["count"]),
})
export default class Counter extends Vue {
  counter!: number;
  increment() {
    console.log("a");
    this.$store.commit("increment");
  }
  decrement() {
    this.$store.commit("decrement");
  }
}
</script>