<template>
  <v-container class="py-0">
    <v-row class="py-0">
      <v-col cols="12" sm="12" md="6" class="px-0 d-flex justify-space-between">
        <div class="px-2">
          <v-icon>mdi-hammer</v-icon>
        </div>
        <div class="px-2 ">
          <div class="text-body-2">
            <span class="font-weight-bold pr-2 "
              >kaunghtetkyaw02749@gmail.com:</span
            >
            <span :style="{ color: create.color }" class="font-weight-medium"
              >Create</span
            >
            election
            <span class="resource">66a0ddfe</span>
          </div>
          <div class="text--secondary workssan text-caption my-1">
            <span>01/01/2021</span> <span>at 1:45 PM</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="py-0">
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BaseLogCard",
  data() {
    return {
      create: {
        color: "#00C853",
      },
      update: {
        color: "#F57F17",
      },
      delete: {
        color: "#F50057",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.resource {
  background-color: #efefef;
  padding: 3px 5px;
  border-radius: 5px;
}
</style>
