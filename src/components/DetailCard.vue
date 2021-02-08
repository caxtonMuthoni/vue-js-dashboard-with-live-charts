<template>
  <div>
       <v-card class="card" tile>
         <div class="card__items">
            <div class="card__icon" :class="[iconBgColor]">
                  <v-icon color="white">{{icon}}</v-icon>
            </div>

            <div class="card__text">
               <span class="card__text-count grey--text text--darken-3">{{count}}</span>
                <span class="card__text-title grey--text">{{title}}</span>
            </div>
         </div>
       </v-card>
  </div>
</template>

<script>
  export default {
    name: 'DetailCard',

    props: {
      iconBgColor: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      icon: {
        type: String,
        required: true
      },

      count: {
        type: Number,
        required: true
      }
    },

    data: () => ({
     
    }),
  }
</script>

<style lang="scss" scoped>
  @import '@/sass/card';
</style>
