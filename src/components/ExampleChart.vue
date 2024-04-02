<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
      chartData: {
        type: Object,
        required: true
      },
      chartOptions: {
        type: Object,
        default: () => ({})
      }
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.chartCanvas.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: this.chartData,
          options: this.chartOptions
        });
      }
    },
    watch: {
      chartData() {
        if (this.chart) {
          this.chart.destroy();
        }
        this.renderChart();
      }
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any styling here */
  </style>
  