<template>
  <div>
    <v-dialog scrollable v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <slot v-bind:activator="{ on, attrs }"></slot>
        </template>
        <v-card class="px-0 px-md-3 py-md-3 py-0 px-lg-6 py-lg-3" v-if="authenticated && userDetail.subscribed !== true">
            <div class="width-100 d-flex justify-end">
            <v-btn
                :ripple="false"
                class="mx-2"
                fab
                icon
                dark
                depressed
                color="deep-purple darken-4 rotate-45 my-2"
                x-small
                @click="dialog = false"
            >
                <v-icon dark class="rotate-45">
                mdi-plus
                </v-icon>
            </v-btn>
            </div>
            <v-card-title
            class="px-2  px-lg-6 text-center d-flex justify-center align-center"
            >
            <span
                class="pb-1 text-center text-h6 text-md-h5 font-weight-bold deep-purple--text darken-4 subscribe-title"
                >Subscribe to our newsletter</span
            >
            </v-card-title>
            <v-card-text class="px-4">
            <div class="pl-0 pl-lg-3 my-2">
                <div class="text-body-1 deep-purple--text darken-4 auth-info font-weight-medium my-6">
                <p>
                   Subscribe to ours newsletter, so you can be the first to find out the latest news and latest elections throughtout a year.
                </p>
                </div>
            </div>
            <v-btn
                dense
                color="deep-purple darken-4"
                class="white--text text-capitalize mt-0"
                depressed
                block
                :ripple="false"
                >Subscribe</v-btn
            >
            </v-card-text>
        </v-card>
        <v-card class="px-0 px-md-3 py-md-3 py-0 px-lg-6 py-lg-3" v-if="authenticated && userDetail.subscribed == true">
            <div class="width-100 d-flex justify-end">
            <v-btn
                :ripple="false"
                class="mx-2"
                fab
                icon
                dark
                depressed
                color="deep-purple darken-4 rotate-45 my-2"
                x-small
                @click="dialog = false"
            >
                <v-icon dark class="rotate-45">
                mdi-plus
                </v-icon>
            </v-btn>
            </div>
            <v-card-title
            class="px-2  px-lg-6 text-center d-flex justify-center align-center"
            >
            <div
                class="pb-1 text-center text-body-1  text-md-h6 font-weight-bold deep-purple--text darken-4 mb-2"
            >
                <div>
                    You have already subscribed
                </div>
                <div>
                    to ours newsletters
                </div>      
            </div>
            
            </v-card-title>
            <v-card-text class="px-4">
            <!-- <div class="pl-0 pl-lg-3 my-2">
                <div class="text-body-1 deep-purple--text darken-4 auth-info font-weight-medium my-6">
                <p>
                   Subscribe to ours newsletter, so you can be the first to find out the latest news and latest elections throughtout a year.
                </p>
                </div>
            </div> -->
            <v-btn
                dense
                color="deep-purple darken-4"
                class="white--text text-capitalize mt-0"
                depressed
                block
                :ripple="false"
                >Unsubscribe here</v-btn
            >
            </v-card-text>
        </v-card>
        <v-card class="px-0 px-md-3 py-md-3 py-0 px-lg-6 py-lg-3" v-if="!authenticated">
            <div class="width-100 d-flex justify-end">
            <v-btn
                :ripple="false"
                class="mx-2"
                fab
                icon
                dark
                depressed
                color="deep-purple darken-4 rotate-45 my-2"
                x-small
                @click="dialog = false"
            >
                <v-icon dark class="rotate-45">
                mdi-plus
                </v-icon>
            </v-btn>
            </div>
            <div class="d-block d-flex justify-center">
                <v-icon large color="deep-purple darken-4"  class="mx-2">mdi-emoticon-frown-outline</v-icon>
                <v-icon large color="deep-purple darken-4" class="mx-2">mdi-emoticon-cry-outline</v-icon>
                <v-icon large color="deep-purple darken-4" class="mx-2">mdi-emoticon-devil-outline</v-icon>
            </div>
            <v-card-title
            class="px-2  px-lg-6 text-center d-flex justify-center align-center"
            >
            <span
                class="d-block text-center text-h6 text-md-h5 font-weight-bold deep-purple--text darken-4"
                >You are not logged in</span
            >
            </v-card-title>
            <v-card-text class="px-4">
            <div class=" px-3 my-2">
                <div class="text-body-1 deep-purple--text darken-4 auth-info font-weight-medium my-2">
                <p>
                   Please login to subscribe to ours newsletter, so you can be the first to find out the latest news and latest elections throughtout a year.
                </p>
                </div>
            </div>
            <v-btn
                dense
                color="deep-purple darken-4"
                class="white--text text-capitalize mt-0"
                depressed
                block
                :ripple="false"
                :to="{name:'Login'}"
                >Log in</v-btn
            >
            </v-card-text>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dialog:false
        }
    }
}
</script>

<style lang="scss" scoped>
.subscribe-title {
    position:relative;
    display: inline-block;
      &::before {
        content: "";
        width: 50%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #363A92;
        transition: all 0.2s ease-in;
      }
}
</style>>

