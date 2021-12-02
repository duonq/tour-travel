
<template>
  <div class="my-11 mx-11">
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in listPlan" :key="i">
          <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.plan }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PlanTour",
  data() {
    return {
      listPlan: [
        {
          title: "Day1",
          plan: "6h00 - 07h00: Đón khách tại điểm hẹn",
        },
        {
          title: "Day2",
          plan: "6h00 - 07h00: Đón khách tại điểm hẹn",
        },
        {
          title: "Day3",
          plan: "6h00 - 07h00: Đón khách tại điểm hẹn",
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
p {
  font-size: 16px;
  color: #000;
  font-family: Courier Prime;
  text-align: justify;
}
h6 {
  font-size: 15px;
  color: #000;
  font-family: Courier Prime;
  text-align: justify;
  font-weight: 500 !important;
}
</style>
