<template>
  <div ref="barChartWrapper" class="svg-container" align="center">
    <h2>Bar Chart</h2>
    <svg v-if="redraw" :width="width" :height="height">
      <g
        v-for="(bar,index) in barsData"
        :key="'bar_group_'+bar[xKey]"
        :transform="`translate(${margins.left}, ${margins.top})`"
      >
        <rect
          class="bg__bar__chart"
          :x="xScale(bar[xKey])"
          :y="0"
          :width="xScale.bandwidth()"
          :height="actual.height"
          fill="rgba(217, 217, 217, 0.3)"
          rx="2"
          ry="2"
        />
        <rect
          ref="bar"
          :key="`barChart_${xKey}_${index}`"
          class="bar__chart"
          :x="xScale(bar[xKey])"
          :y="yScale(bar[yKey])"
          :width="xScale.bandwidth()"
          fill="rgba(79, 177, 116, 1)"
          :height="actual.height - yScale(bar[yKey])"
          rx="2"
          ry="2"
        />
      </g>

      <g :transform="`translate(${margins.left}, ${margins.top})`" class="axis-group">
        <g ref="xAxis" :transform="`translate(0, ${actual.height})`" class="bottom-axis" />
        <g ref="yAxis" class="left-axis" />
      </g>
    </svg>
  </div>
</template>

<script>
import { max, min } from "d3-array";

import { axisBottom, axisLeft } from "d3-axis";
import { scaleBand, scaleLinear } from "d3-scale";
import { select, selectAll } from "d3-selection";
import { transition } from "d3-transition";

export default {
  name: "BarGraph",
  props: {
    xKey: { type: String, required: false, default: "name" },
    yKey: { type: String, required: false, default: "value" },
    initialWidth: { type: Number, required: false, default: 500 },
    margins: {
      type: Object,
      default: () => ({
        top: 30,
        left: 20,
        bottom: 30,
        right: 20
      })
    }
  },

  data: () => ({
    barsData: [
      { name: "male", value: "44" },
      { name: "female", value: "38" },
      { name: "other", value: "11" }
    ],
    width: 0,
    redraw: true
  }),

  created() {
    this.width = this.initialWidth;
  },

  mounted() {
    this.width = this.$refs.barChartWrapper.offsetWidth * 0.75;
    this.addResizeListener();
    this.animateLoad();
    this.renderAxes();
  },

  methods: {
    animateLoad() {
      selectAll(this.$refs.bar)
        .data(this.barsData)
        .transition()
        .delay(0)
        .duration(1000)
        .attr("y", d => {
          return this.yScale(d[this.yKey]);
        })
        .attr("height", d => {
          return this.actual.height - this.yScale(d[this.yKey]);
        });
    },

    addResizeListener() {
      window.addEventListener("resize", () => {
        this.$data.redraw = false;
        setTimeout(() => {
          this.$data.redraw = true;
          this.$data.width = this.$refs.barChartWrapper.offsetWidth * 0.75;
          this.animateLoad();
          this.renderAxes();
        }, 300);
      });
    },

    renderAxes: function() {
      const xAxis = axisBottom().scale(this.xScale);
      const yAxis = axisLeft()
        .scale(this.yScale)
        .ticks(4)
        .tickFormat(d => d);

      select(this.$refs.xAxis).call(xAxis);
      select(this.$refs.yAxis).call(yAxis);
    }
  },

  computed: {
    dataMax() {
      return max(this.barsData, d => {
        return d[this.yKey] || 1;
      });
    },
    dataMin() {
      return min(this.barsData, d => {
        return d[this.yKey];
      });
    },
    xScale() {
      return scaleBand()
        .rangeRound([0, this.actual.width])
        .padding(0.1)
        .domain(
          this.barsData.map(d => {
            return d[this.xKey];
          })
        );
    },
    yScale() {
      return scaleLinear()
        .rangeRound([this.actual.height, 0])
        .domain([this.dataMin > 0 ? 0 : this.dataMin, this.dataMax]);
    },
    height() {
      return this.width / 1.61803398875;
    },
    actual() {
      return {
        width: this.width - this.margins.left - this.margins.right,
        height: this.height - this.margins.top - this.margins.bottom
      };
    }
  }
};
</script>

<style lang="scss">
.bottom-axis,
.left-axis {
  path {
    stroke: rgba(119, 119, 119, 1);
  }
  .tick {
    line {
      display: none;
    }
    text {
      fill: rgba(119, 119, 119, 1);
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
</style>