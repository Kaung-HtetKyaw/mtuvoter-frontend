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
                  class="deep-purple darken-2 white--text d-flex justify-center"
                  >Forgot Password</v-card-title
                >
                <v-card-text class="mt-6 px-1">
                  <v-form ref="form" class="px-2">
                    <div class="px-3">
                      <div class="width-100">
                        <p class="text-center text-body-2">
                          Enter your email address below. Reset link will be
                          sent to that address
                        </p>
                      </div>
                      <v-text-field
                        outlined
                        type="email"
                        v-model="email"
                        label="Your email address"
                        required
                        dense
                      ></v-text-field>
                    </div>

                    <div
                      class="width-100 d-flex flex-column justify-center align-center"
                    >
                      <v-btn
                        color="deep-purple darken-2"
                        class="white--text text-capitalize"
                        depressed
                        :ripple="false"
                        @click="sendResetLink"
                        >Send Reset link</v-btn
                      >
                    </div>
                    <div class="mt-2">
                      <router-link :to="{ name: 'Home' }">
                        <a class="text-decoration-underline">Back to Home</a>
                      </router-link>
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
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendResetLink() {
      this.$router.push({ name: "Reset-Password" });
    },
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
</style>
