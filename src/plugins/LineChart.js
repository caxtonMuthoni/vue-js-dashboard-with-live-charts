import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins;

export default {
  extends: Line,

  mixins: [reactiveProp],

  data() {
    return {
      options: {}
    }
  },

  props: {

    title: {
      type: String,
      default: ""
    },

    yLabel: {
      type: String,
      default: ""
    },

    Xlabel: {
      type: String,
      default: ""
    },
  },


  methods: {

    renderLineChart() {
      this.renderChart(
        this.getChartData,
        this.options
      )
    },
    setOptinons() {
      this.options = {
        title: {
          display: true,
          text: this.title
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            },
            scaleLabel: {
              display: true,
              labelString: this.yLabel
            }
          }],
          xAxes: [{
            ticks: {
              maxRotation: 90,
              minRotation: 45
            },
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: this.Xlabel
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  mounted() {
    this.setOptinons()
    this.renderChart(this.chartData, this.options)
  },
}