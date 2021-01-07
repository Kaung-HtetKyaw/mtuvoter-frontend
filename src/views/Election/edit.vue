<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-1">
          <v-card-title
            class="deep-purple darken-2 white--text d-flex justify-center"
            >Enter Election Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <v-textarea
                outlined
                label="Provide Election's information briefly"
                required
                v-model="about"
              ></v-textarea>
              <v-container class="pt-0">
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex justify-center">
                    <h2
                      class="deep-purple--text darken-2  text-center py-2 election-form__title"
                    >
                      Choose Start Date
                    </h2>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-date-picker
                      color="deep-purple darken-2"
                      width="100%"
                      v-model="start.date"
                      elevation="1"
                    ></v-date-picker
                  ></v-col>
                  <v-col cols="12" sm="12" md="6"
                    ><v-time-picker
                      color="deep-purple darken-2"
                      v-model="start.time"
                      ampm-in-title
                      class="width-100"
                    ></v-time-picker
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex justify-center">
                    <h2
                      class="deep-purple--text darken-2  text-center py-2 election-form__title"
                    >
                      Choose End Date
                    </h2>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-date-picker
                      color="deep-purple darken-2"
                      width="100%"
                      v-model="end.date"
                      elevation="1"
                    ></v-date-picker
                  ></v-col>
                  <v-col cols="12" sm="12" md="6"
                    ><v-time-picker
                      color="deep-purple darken-2"
                      v-model="end.time"
                      ampm-in-title
                      class="width-100"
                    ></v-time-picker
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn
                      color="deep-purple darken-2"
                      class="mr-4 white--text text-capitalize"
                      depressed
                      block
                      @click="createElection"
                      >Create Election</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      about: "",
      start: {
        date: new Date().toISOString().substr(0, 10),
        time: "00:00",
      },
      end: {
        date: new Date().toISOString().substr(0, 10),
        time: "00:00",
      },
    };
  },
  methods: {
    createElection() {
      console.log(this.election);
      this.$router.push({
        name: "Election-New-Position",
        params: { election: "alo" },
      });
    },
  },
  computed: {
    election() {
      return {
        about: this.about,
        startDate: new Date(`${this.start.date}T${this.start.time}`),
        endDate: new Date(`${this.start.date}T${this.start.time}`),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.election-form {
  &__title {
    position: relative;
    display: inline-block;
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #5545a8;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
