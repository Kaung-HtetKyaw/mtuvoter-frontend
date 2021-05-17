<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-1">
          <v-card-title
            class="deep-purple darken-4 white--text d-flex justify-center"
            >Enter Election Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <v-text-field
                outlined
                label="Election's name"
                required
                v-model="name"
              ></v-text-field>
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
                      class="deep-purple--text darken-4  text-center py-2 election-form__title"
                    >
                      Choose Start Date
                    </h2>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-date-picker
                      color="deep-purple darken-4"
                      width="100%"
                      v-model="start.date"
                      elevation="1"
                      locale="my"
                    ></v-date-picker
                  ></v-col>
                  <v-col cols="12" sm="12" md="6"
                    ><v-time-picker
                      color="deep-purple darken-4"
                      v-model="start.time"
                      ampm-in-title
                      class="width-100"
                    ></v-time-picker
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex justify-center">
                    <h2
                      class="deep-purple--text darken-4  text-center py-2 election-form__title"
                    >
                      Choose End Date
                    </h2>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-date-picker
                      color="deep-purple darken-4"
                      width="100%"
                      v-model="end.date"
                      elevation="1"
                      locale="my"
                    ></v-date-picker
                  ></v-col>
                  <v-col cols="12" sm="12" md="6"
                    ><v-time-picker
                      color="deep-purple darken-4"
                      v-model="end.time"
                      ampm-in-title
                      class="width-100"
                    ></v-time-picker
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn
                      color="deep-purple darken-4"
                      class="mr-4 white--text text-capitalize"
                      depressed
                      block
                      :ripple="false"
                      @click="createElection"
                      :loading="loading"
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
import store from "@/store/index.js";
import { showNoti } from "@/utils/noti.js";
export default {
  data() {
    return {
      about: "",
      name: "",
      start: {
        date: new Date().toISOString().substr(0, 10),
        time: "00:00"
      },
      end: {
        date: new Date().toISOString().substr(0, 10),
        time: "00:00"
      },
      loading: false
    };
  },
  computed: {
    election() {
      return {
        about: this.about,
        startDate: new Date(`${this.start.date}T${this.start.time}`),
        endDate: new Date(`${this.end.date}T${this.end.time}`),
        name: this.name
      };
    },
    isValidDate() {
      return (
        new Date(this.election.endDate) > new Date(this.election.startDate)
      );
    }
  },
  methods: {
    async createElection() {
      const vm = this;
      vm.loading = true;
      if (!vm.isValidDate) {
        showNoti(
          "error",
          "Election end date must be greate than the election start date"
        );
      }
      await store
        .dispatch("election/createElection", { election: vm.election })
        .then(res => {
          vm.loading = false;
          showNoti("success", "New election has been created successfully");
          vm.$router.replace({
            name: "Election-Single",
            params: { election: res._id }
          });
        })
        .catch(() => {
          vm.loading = false;
          showNoti("error", "Error creating new election");
        });
    }
  }
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
