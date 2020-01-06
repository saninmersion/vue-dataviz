<template>
  <div ref="pieChartWrapper" class="svg-container" align="center">
    <h2>Pie Chart</h2>
    <svg :width="diameter" :height="diameter" :viewBox="'0 0 ' + diameter + ' ' + diameter">
      <g :transform="`translate(${radius}, ${radius})`">
        <Slice
          v-for="(slice, index) in pieData"
          :key="index"
          :value="slice"
          :label="getLabel(index)"
          :color="colors[index]"
          :radius="radius"
        />
      </g>
    </svg>
  </div>
</template>
<script>
import { pie } from "d3-shape";
import Slice from "./Slice";

export default {
  name: "PieChart",

  components: { Slice },

  props: {
    radius: { type: Number, required: false, default: 100 }
  },

  data() {
    return {
      diameter: 0,
      outerRadius: 0,
      innerRadius: 0,
      colors: ["#3B4555", "#0e5d9e", "#408a4b"],
      chartData: {
          male: 45,
          female: 43,
          others: 12,
      }
    };
  },

  computed: {
    pieData() {
      if (Object.values(this.chartData).length === 0) {
        return this.createPie()([100]);
      }

      return this.createPie()(Object.values(this.chartData));
    }
  },

  mounted() {
    this.diameter = this.radius * 2;
  },

  methods: {
    createPie() {
      return pie().sort(null);
    },
    getLabel(index) {
      if (this.chartData === "undefined" || this.chartData === {}) {
        return "";
      }

      const currentLabel = Object.keys(this.chartData)[index];
      const total = Object.values(this.chartData).reduce((a, b) => a + b, 0);
      const percent = (
        (this.chartData[currentLabel] / parseFloat(total)) *
        100
      ).toFixed(1);

      return `${currentLabel} ${percent}%`;
    }
  }
};
</script>