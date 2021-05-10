<template>
  <v-container fluid class="white--text footer deep-purple darken-4">
    <v-row>
      <v-container>
        <v-row class="flex-column-reverse flex-md-row">
          <v-col cols="12" sm="12" md="6">
            <div class="workssan footer-info text-center text-md-left">
              <p>
                An Innovative Organization in MTU
              </p>
              <p>
                mturector@mtu.edu.mm
                <span class="px-1 font-weight-bold">.</span>
                <span>+95-2-4057006</span>
                <span class="px-1 font-weight-bold">.</span>
                <span>+95-2-4057006</span>
              </p>
              <p>
                <span>Mandalay</span>
                <span class="mx-1">,</span>
                <span>Myanmar</span>
              </p>
              <p class="footer-copyright">
                Copy 2020 Mtucodelab. All Rights Reserved
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <h2 class="text-center">Subscribe to ours Newsletter</h2>
            <div class="my-2 btn--subscribe">
              <v-btn
                block
                elevation="0"
                :ripple="false"
                class="deep-purple--text darken-4 workssan"
                >Subscribe</v-btn
              >
              <p class="workssan footer-copyright text-center my-2">
                You have to be logged in to subscribe
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
<style lang="sass" scoped>
.footer
   &-info
      font-size: 14px
      line-height: 1.86
      font-weight: 400
   &-copyright
      color: rgba(255, 255, 255, 0.5)
.btn--subscribe
   p
      font-size: 14px
</style>
