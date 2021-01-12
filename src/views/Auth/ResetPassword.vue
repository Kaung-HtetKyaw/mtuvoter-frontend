<template>
  <v-container class="">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="reset__wrapper d-flex justify-center align-center"
      >
        <v-card class="elevation-0 pb-6 width-50 reset__form">
          <v-card-title
            class="deep-purple darken-2 white--text d-flex justify-center"
            >Reset Password</v-card-title
          >
          <v-card-text class="mt-6 px-1">
            <v-form ref="form" class="px-2">
              <div>
                <div>
                  <h6
                    class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                  >
                    Email Address
                  </h6>
                  <v-text-field
                    outlined
                    type="email"
                    required
                    dense
                  ></v-text-field>
                </div>
                <div>
                  <h6
                    class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                  >
                    New Password
                  </h6>
                  <v-text-field
                    outlined
                    type="password"
                    required
                    dense
                  ></v-text-field>
                </div>
                <div>
                  <h6
                    class="text-body-2 font-weight-medium deep-purple--text darken-2 mb-2"
                  >
                    Confirm new password
                  </h6>
                  <v-text-field
                    outlined
                    type="password"
                    required
                    dense
                  ></v-text-field>
                </div>
              </div>

              <div
                class="width-100 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  color="deep-purple darken-2"
                  class="white--text text-capitalize"
                  depressed
                  :ripple="false"
                  >Reset Password</v-btn
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
export default {};
</script>

<style lang="scss" scoped>
.reset__wrapper {
  width: 100%;
  height: 90vh;
}
.reset__form {
  border: 1px solid rgba(0, 0, 0, 0.39);
}
</style>
