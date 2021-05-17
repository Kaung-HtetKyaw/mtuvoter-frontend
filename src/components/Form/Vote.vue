<template>
  <v-row justify="center" class="width-100">
    <v-dialog scrollable v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <slot v-bind:activator="{ on, attrs }"></slot>
      </template>
      <v-card
        class="px-0 px-md-3 py-md-3 py-0 px-lg-6 py-lg-6"
        v-if="!userDetail"
      >
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
            class=" text-center text-body-1 text-md-h6 font-weight-bold deep-purple--text darken-4"
            >You are not currently logged in</span
          >
        </v-card-title>
        <v-card-text class="px-4">
          <div class="pl-0 pl-lg-3 my-2">
            <ul class="text-body-2 auth-info">
              <li>
                If u already have an account,
                <router-link
                  class="text-decoration-underline deep-purple--text darken-4"
                  :to="{ name: 'Login' }"
                  >Log in here.</router-link
                >
              </li>
              <li>
                If u forget your MTU student email, you can contact with the
                admins for the one time voting token and enter that voting token
                below
              </li>
            </ul>
          </div>

          <v-text-field
            outlined
            label="Enter Vote Token"
            required
            dense
            v-model="token"
            class="pt-2"
          ></v-text-field>
          <v-select
            :items="yearArray"
            label="Select your current attending year"
            dense
            v-model="year"
            outlined
          ></v-select>
          <v-btn
            dense
            color="deep-purple darken-4"
            class="white--text text-capitalize"
            depressed
            block
            :ripple="false"
            :loading="voting"
            @click="guestVote"
            >Vote this candidate</v-btn
          >
        </v-card-text>
      </v-card>
      <v-card class="px-0 px-md-3 py-md-3 py-0 px-lg-6 py-lg-6" v-else>
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
            class=" text-center text-body-1 text-md-h6 font-weight-bold deep-purple--text darken-4"
            >Are u sure to vote for this candidate?</span
          >
        </v-card-title>
        <v-card-text class="px-4">
          <div class="pl-0 pl-lg-3 my-2">
            <ul class="text-body-2 auth-info">
              <li>
                You can vote only once for this postion of the election. So you
                need to be sure to vote for this candidate.
              </li>
            </ul>
          </div>
          <v-select
            :items="yearArray"
            label="Select your current attending year"
            dense
            v-model="year"
            class="mt-4"
            outlined
          ></v-select>
          <v-btn
            dense
            color="deep-purple darken-4"
            class="white--text text-capitalize mt-0"
            depressed
            block
            :ripple="false"
            :loading="voting"
            @click="vote"
            >Vote this candidate</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { yearArray } from "@/utils/constants.js";
import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
export default {
  props: {
    raced: {
      type: Boolean,
      required: true
    },
    candidate: {
      type: Object,
      required: true
    },
    electionId: {
      type: String,
      require: true
    }
  },
  data: () => ({
    dialog: false,
    yearArray,
    year: null,
    token: null,
    voting: false,
    checking_vote_token: false,
    guest_voting: false
  }),
  methods: {
    async vote() {
      const vm = this;
      vm.voting = true;
      let payload = {
        election: vm.electionId,
        candidate: vm.candidate._id,
        position: vm.candidate._post,
        student_type: vm.year
      };
      await axios()
        .post(`/vote`, payload)
        .then(() => {
          showNoti("success", "Thank you for your constribution");
          vm.$emit("voted");
          vm.voting = false;
        })
        .catch(e => {
          vm.voting = false;
          if (e.response.data.message) {
            showNoti("error", e.response.data.message);
          } else {
            showNoti("error", "Something went wrong");
          }
        });
    },
    async guestVote() {
      const vm = this;
      vm.voting = true;
      return await vm
        .guestLogin()
        .then(async () => {
          vm.voting = false;
          vm.dialog = false;
          vm.token = null;
          return await vm.vote();
        })
        .catch(e => {
          vm.voting = false;
          vm.dialog = false;
          vm.token = null;
          if (e.response.data.message) {
            showNoti("error", e.response.data.message);
          } else {
            showNoti("error", "Something went wrong");
          }
        });
    },
    async guestLogin() {
      const vm = this;
      return axios().post(`/users/guest`, {
        vote_token: vm.token,
        _election: vm.electionId
      });
    }
  }
};
</script>
<style lang="scss">
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
}
.auth-info {
  li {
    margin: 10px 0;
  }
}
</style>
