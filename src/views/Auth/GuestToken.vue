<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="forgot__wrapper d-flex justify-center align-center"
      >
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="12" md="6">
              <v-card class="elevation-0 pb-6 width-100 forgot__form">
                <v-card-title
                  class="deep-purple darken-4 white--text d-flex justify-center"
                  >Generate Guest Token</v-card-title
                >
                <v-card-text class="mt-6 px-1">
                  <v-form ref="form" class="px-2">
                    <div class="px-3">
                      <div class="width-100">
                        <p class="text-center text-body-2">
                          Generate a guest login token for voting in an election
                        </p>
                      </div>
                      <v-text-field
                        outlined
                        type="email"
                        v-model="SID"
                        label="Student ID"
                        required
                        dense
                      ></v-text-field>
                      <div
                        class="width-100 d-flex justify-center align-center no-result mb-4 py-3 rounded"
                      >
                        Guest Token:
                        <span class="ml-2 font-weight-bold">aslf3l4</span>
                      </div>
                    </div>

                    <div
                      class="width-100 d-flex flex-column justify-center align-center"
                    >
                      <v-btn
                        color="deep-purple darken-4"
                        class="white--text text-capitalize"
                        depressed
                        :ripple="false"
                        >Generate Token</v-btn
                      >
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GuestToken",

  data() {
    return {
      SID: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.forgot__wrapper {
  width: 100%;
  height: 80vh;
}
.forgot__form {
  border: 1px solid rgba(0, 0, 0, 0.39);
}
.no-result {
  border: 1px solid rgba(0, 0, 0, 0.39);
  background-color: #f6f8fa;
}
</style>
