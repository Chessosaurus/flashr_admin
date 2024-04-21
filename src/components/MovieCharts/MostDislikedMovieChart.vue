<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
</template>
  
  <script>
  import Chart from 'chart.js/auto';
  import {get_uninteresting_movies_ranked} from '../../typescript/insights'

  export default {
    props: {
      chartOptions: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        chartData: {
          labels: [],
				  datasets: [{
				    label: 'votes',
				    data: []
				  }]
        },
      };
    },
    mounted() {
      this.fetchDataAndRender();
    },
    methods: {
      async fetchDataAndRender() {
        let names = []
        let counts = []

        const dataString = await get_uninteresting_movies_ranked();
        const parsedData = JSON.parse(dataString);

        console.log(parsedData)
        
        parsedData.forEach((element) => {
          this.chartData.labels.push(element.name);
          this.chartData.datasets.forEach(set =>{
            set.data.push(element.count)
          })
        });

        this.renderChart();
      },
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
  