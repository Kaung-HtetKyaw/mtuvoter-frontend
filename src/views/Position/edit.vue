<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="px-3">
          <v-alert
            dismissible
            color="deep-purple darken-2"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-information"
            class="text-body-2 text-md-subtitle-1"
          >
            Go
            <router-link
              :to="{ name: 'Election-Edit', params: { election } }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            to update the <strong>related Election</strong> detail.
          </v-alert>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-2 pb-6">
          <v-card-title
            class="deep-purple darken-2 white--text d-flex justify-center"
            >Enter Positions Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <div v-for="i in positions.length" :key="i">
                <div class="width-100 d-flex justify-end">
                  <v-btn
                    v-if="i - 1 > 0"
                    :ripple="false"
                    class="mx-2"
                    fab
                    dark
                    depressed
                    color="deep-purple darken-2 rotate-45 my-2"
                    x-small
                    @click="removePosition(i - 1)"
                  >
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </div>
                <v-text-field
                  outlined
                  label="Provide Position's name"
                  required
                  v-model="positions[i - 1].name"
                ></v-text-field>
                <v-textarea
                  outlined
                  label="Provide Position's information briefly"
                  required
                  v-model="positions[i - 1].description"
                ></v-textarea>
              </div>

              <div
                class="width-100 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  :ripple="false"
                  class="mx-2 mb-6"
                  fab
                  dark
                  color="deep-purple darken-2"
                  @click="addPosition"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
                <v-btn
                  color="deep-purple darken-2"
                  class="white--text text-capitalize"
                  block
                  depressed
                  :ripple="false"
                  @click="createPositions"
                  >Create Positions</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Election-New-Position",
  data() {
    return {
      positions: [{ name: "", description: "" }],
    };
  },
  computed: {
    election() {
      return this.$route.params.election;
    },
  },
  created() {
    this.positions[0]._election = this.election;
  },
  methods: {
    createPositions() {
      console.log(this.positions);
      this.$router.push({
        name: "Election-New-Candidate",
        params: { election: "alo", position: "alo" },
      });
    },
    addPosition() {
      this.positions.push({
        _election: this.election,
        name: "",
        description: "",
      });
      console.log(this.positions);
    },
    removePosition(index) {
      this.positions.splice(index, 1);
      console.log(this.positions);
    },
  },
};
</script>

<style></style>
