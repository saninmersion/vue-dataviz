<template>
  <g class="arc">
    <path class="arc" :d="arc" :fill="color" />
    <text
      :transform="'translate(' + centroid +')'"
      text-anchor="middle"
      alignment-baseline="middle"
    >
      <tspan x="0" dy="0">{{label}}</tspan>
    </text>
  </g>
</template>

<script>
import { arc } from "d3-shape";

export default {
  name: "Slice",

  props: {
    value: { type: Object, required: true, default: () => ({}) },
    label: { type: String, required: true, default: "" },
    color: { type: String, required: false, default: "#ECC417" },
    radius: { type: Number, required: true, default: 5 }
  },

  data() {
    return {
      innerRadius: 0
    };
  },

  computed: {
    arc() {
      return this.createArc()(this.value);
    },
    centroid() {
      return this.createArc().centroid(this.value);
    }
  },

  methods: {
    createArc() {
      return arc()
        .innerRadius(this.innerRadius)
        .outerRadius(this.radius);
    }
  }
};
</script>

<style lang="scss">
text {
  font-size: 12px;
  fill: #fff;
}
</style>
