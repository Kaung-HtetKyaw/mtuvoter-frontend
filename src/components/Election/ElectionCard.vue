<template>
  <div>
    <v-card color="#F9F9F9" :rounded="true" class="workssan" elevation="1">
      <div>
        <div>
          <v-chip small class="ma-2" color="deep-purple darken-2 white--text">
            Raced
          </v-chip>

          <v-card-title class="election-title "
            >MTU Student Union 2020</v-card-title
          >
          <v-timeline align-top dense>
            <v-timeline-item color="#54AF51" small>
              <template v-slot:opposite>
                <span>Starts</span>
              </template>
              <div>
                <div class="font-weight-normal">
                  8 Aug 2020 10:00AM
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="#E53935" small>
              <div>
                <div class="font-weight-normal">
                  8 Aug 2020 10:00AM
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>

          <v-divider></v-divider>
          <v-card-actions class="px-4 py-4 d-flex justify-center">
            <v-btn
              class="text-capitalize election-btn deep-purple darken-2 white--text font-weight-medium"
              :ripple="false"
              elevation="0"
              :to="{ name: 'Election', params: { id: 'alo' } }"
              >View Details</v-btn
            >
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.election {
  &-btn {
  }
}
</style>
