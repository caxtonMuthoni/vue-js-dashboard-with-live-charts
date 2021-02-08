import { Bar, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins;

export default {
  extends: Bar,
  
  mixins: [reactiveProp],

  props: {
    title: {
      type: String,
      default: null
    },
    yLabelString : {
      type: String,
      default: null
    }
  },
  data() {
    return {
      options: null,
    }
  },

  methods: {
    setOptions () {
      this.options = {
        title: {
          display: true,
          text: this.title
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: this.yLabelString
            },
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true
            },
          }],
          xAxes: [{
            ticks: {
              maxRotation: 90,
              minRotation: 45
            },
            gridLines: {
              display: false
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
  mounted () {
    this.setOptions()
    this.renderChart(this.chartData, this.options)
  }
}