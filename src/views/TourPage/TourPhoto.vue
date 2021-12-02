<template>
  <div class="my-11 mt-15">
    <v-sheet class="photo" elevation="8">
      <v-slide-group v-model="model" mandatory show-arrows>
        <v-slide-item
          v-for="(tour, i) in tours"
          :key="i"
          v-slot="{ active, toggle }"
          class="pa-2"
        >
          <v-card
            :color="active ? 'primary' : 'blue lighten-1'"
            @click="toggle"
          >
            <a href=""><v-img :src="require(`@/assets/${tour.img}`)" /></a>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "TourPhoto",
  data() {
    return {
      model: null,
      tours: [
        { img: "viewTourAdd(1).png" },
        { img: "viewTourAdd(2).png" },
        { img: "viewTourAdd(3).png" },
        { img: "viewTourAdd(4).png" },
        { img: "viewTourAdd(5).png" },
        { img: "viewTourAdd(1).png" },
        { img: "viewTourAdd(2).png" },
        { img: "viewTourAdd(3).png" },
        { img: "viewTourAdd(4).png" },
        { img: "viewTourAdd(5).png" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .photo {
    .v-slide-group__content .v-card--link {
      width: 500px !important;
    }
  }
}
</style>