<template>
  <v-container class="home grey lighten-5">
    <!-- Top Cards section -->
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <detail-card
            title="Total Surveys"
            iconBgColor="teal"
            icon="mdi-apps"
            :count="surveyCount"
          ></detail-card>
        </v-col>

        <v-col cols="12" md="3">
          <detail-card
            title="Total Posts"
            iconBgColor="blue"
            icon="mdi-image-filter-none"
            :count="postCount"
          ></detail-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Charts section -->
    <v-container class="">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-2">
            <bar-chart
              title=""
              yLabelString="users"
              :chart-data="userChartData"
            />
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-card class="pa-2">
            <line-chart v-if="loaded" :chart-data="userLineChartData" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import DetailCard from "@/components/DetailCard.vue";

export default {
  name: "Home",
  components: {
    "detail-card": DetailCard,
  },

  data: () => ({
    loaded: false,
    surveyCount: 10,
    postCount: 20,
    userData: [],
    labels: [],
    userLineChartData: {},
    userChartData: {},
  }),

  mounted() {
    this.loaded = false;
    this.setChartDataLabels();
    this.setUserData();
    this.loaded = true;
  },

  methods: {
    /* Set Bar chart Data */
    setBarChartData() {
      this.userChartData = {
        labels: this.labels,
        datasets: [
          {
            label: "New users in last 7 days",
            data: this.userData,
            borderWidth: 1,
            pointBorderColor: "#2554FF",
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(255,99,132,1)",
              "rgba(254, 62, 235, 1)",
              "rgba(155, 199, 32, 1)",
            ],
            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(255,99,132,0.2)",
              "rgba(254, 62, 235, 0.2)",
              "rgba(155, 199, 32, 0.2)",
              "rgba(4, 62, 235, 0.2)",
              "rgba(54, 162, 250, 0.2)",
            ],
          },
        ],
      };
    },

    /* SET USER LINE CHART DATA */
    setUserLineChartData() {
      this.userLineChartData = {
        labels: this.labels,
        datasets: [
          {
            label: "New users in last 7 days",
            data: this.userData,
            fill: true,
            borderColor: "#f87979",
            backgroundColor: "rgba(248, 121, 121, .2)",
            borderWidth: 1,
          },
        ],
      };
    },

    /* SETTING USER DATA */
    setUserData() {
      const currentUserData = [36, 38, 15, 9, 16, 12, 10];
      this.userData = currentUserData;

      let today = currentUserData[currentUserData.length - 1];

      this.setUserLineChartData();
      this.setBarChartData();

      // Updating todays new users after every 30 seconds
      setInterval(() => {
        today += Math.floor(Math.random() * 10) + 1;
        currentUserData[currentUserData.length - 1] = today;
        this.userData = currentUserData;
        this.setUserLineChartData();
        this.setBarChartData();
      }, 30000);
    },

    /* SETTING CHART lABELS */
    setChartDataLabels() {
      let last7Days = [];

      for (var i = 0; i < 7; i++) {
        const today = new Date();
        today.setDate(today.getDate() - i);
        last7Days.push(this.$options.filters.formatDate(today));
      }
      this.labels = last7Days.reverse();
    },
  },
};
</script>
<style scoped>
.home {
  height: 100vh !important;
}
</style>
