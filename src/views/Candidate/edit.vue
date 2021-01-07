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
              :to="{
                name: 'Election-Position-Edit',
                params: { election, position },
              }"
              class="text-decoration-underline px-1"
              >here</router-link
            >
            to update the <strong>related Position</strong> detail.
          </v-alert>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-2 pb-6">
          <v-card-title
            class="deep-purple darken-2 white--text d-flex justify-center"
            >Enter Candidates Details</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <div v-for="i in candidates.length" :key="i">
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
                    @click="removeCandidate(i - 1)"
                  >
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </div>
                <v-text-field
                  outlined
                  label="Enter Candidate name"
                  required
                  v-model="candidates[i - 1].name"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Enter Candidate email"
                  required
                  v-model="candidates[i - 1].name"
                ></v-text-field>
                <v-file-input
                  class="user-photo"
                  accept="image/*"
                  label="Upload Candidate Photo Here"
                  outlined
                  dense
                  show-size
                  v-model="candidates[i - 1].photo"
                ></v-file-input>
                <v-textarea
                  outlined
                  label="Enter Candidate's Election or Campaign Promise"
                  required
                  v-model="candidates[i - 1].description"
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
                  @click="addCandidate"
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
                  >Create Candidates</v-btn
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
      candidates: [{ name: "", email: "", promise: "", photo: {} }],
    };
  },
  computed: {
    election() {
      return this.$route.params.election;
    },
    position() {
      return this.$route.params.position;
    },
  },
  created() {
    this.candidates[0]._election = this.election;
    this.candidates[0]._position = this.position;
  },
  methods: {
    addCandidate() {
      this.candidates.push({
        _election: this.election,
        _position: this.position,
        name: "",
        email: "",
        promise: "",
        photo: "",
      });
      console.log(this.candidates);
    },
    removeCandidate(index) {
      this.candidates.splice(index, 1);
      console.log(this.candidates);
    },
  },
};
</script>

<style lang="scss">
.user-photo {
  .v-input__prepend-outer {
    display: none !important;
  }
}
</style>
