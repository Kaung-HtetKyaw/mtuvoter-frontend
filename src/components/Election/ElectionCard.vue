<template>
  <div>
    <v-card color="#fff" :rounded="true" class="workssan" elevation="6">
      <div>
        <div>
          <v-chip
            small
            class="ma-2"
            color="deep-purple darken-2 white--text my-3"
          >
            Raced
          </v-chip>
          <v-divider></v-divider>
          <v-card-title class="election-title  font-weight-bold text-center"
            >မန္တလေးနည်းပညာတက္ကသိုလ်ကျောင်းသားသမဂ္ဂ ရွေးကောက်ပွဲ
            ၂၀၂၀</v-card-title
          >
          <v-divider></v-divider>
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
              :to="{ name: 'Election', params: { election: 'alo' } }"
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
