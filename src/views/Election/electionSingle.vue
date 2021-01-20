/* eslint-disable */
<template>
  <v-container class="election py-0">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        v-if="userDetail.role === 'admin' || userDetail.role === 'mod'"
      >
        <v-alert
          dismissible
          color="deep-purple darken-2"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-information"
          class="text-body-2 text-md-subtitle-1"
        >
          As a moderator, you can generate guest token
          <router-link
            :to="{ name: 'Guest-Token' }"
            class="text-decoration-underline"
            >Here
          </router-link>
          for the guest users.
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="flex-column-reverse flex-md-row">
      <v-col
        cols="12"
        sm="12"
        md="9"
        class="d-flex flex-column justify-center align-start"
      >
        <div class="election__title--wrapper py-3">
          <h1
            class="deep-purple--text darken-2 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan election__title text-center text-md-left py-2"
          >
            {{ election.name }}
          </h1>
        </div>
        <div
          class="election__content font-weight-medium my-4 font-weight-bold px-1"
        >
          <p>
            {{ election.about }}
          </p>
        </div>
        <div class="width-100">
          <router-link
            v-if="userDetail.role === 'admin'"
            :to="{
              name: 'Election-New-Position',
              params: { election: election._id },
            }"
          >
            <v-btn
              color="deep-purple darken-2"
              class="white--text text-capitalize"
              depressed
              block
              :ripple="false"
              >Add position to this election</v-btn
            ></router-link
          >
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <div
          class="my-6 text-body-2 text-md-subtitle-1 text-center text-md-left"
        >
          <div
            v-for="(position, index) in election.positions"
            :key="position._id"
          >
            <h3
              class="election__link py-2 deep-purple--text darken-2"
              @click="$vuetify.goTo(`#position-${index}`)"
            >
              {{ position.name }}
            </h3>
            <v-divider class="my-2"></v-divider>
          </div>
          <div>
            <router-link
              :to="{ name: 'Election-Result', params: { election: 'alo' } }"
            >
              <h3 class="election__link py-2 deep-purple--text darken-2">
                မဲရလဒ်များ
              </h3></router-link
            >

            <v-divider class="my-2"></v-divider>
          </div>
          <div class="width-100">
            <router-link
              v-if="userDetail.role === 'admin'"
              :to="{ name: 'Election-Edit', params: { election: 'alo' } }"
            >
              <v-btn
                color="deep-purple darken-2"
                class="white--text text-capitalize"
                depressed
                block
                :ripple="false"
                >Edit this election</v-btn
              ></router-link
            >
          </div>
          <div class="width-100 mt-3">
            <router-link
              v-if="userDetail.role === 'admin'"
              :to="{ name: 'Election-Edit', params: { election: 'alo' } }"
            >
              <v-btn
                color="red darken-2"
                class="white--text text-capitalize"
                depressed
                block
                :ripple="false"
                >Delete this election</v-btn
              ></router-link
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-for="(position, index) in election.positions" :key="position._id">
      <v-col
        cols="12"
        sm="12"
        md="9"
        class="d-flex flex-column justify-center align-start"
        :id="'position-' + index"
      >
        <div class="election__title--wrapper py-3">
          <h1
            class="deep-purple--text darken-2 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan election__title text-center text-md-left py-2"
          >
            {{ position.name }}
          </h1>
        </div>
        <div class=" election__content font-weight-bold my-4 width-100">
          <div class="position__description">
            <p>
              {{ position.description }}
            </p>
          </div>
          <div
            class="d-flex flex-column  justify-center align-center my-3 width-100"
          >
            <v-btn
              depressed
              color="deep-purple darken-2"
              block
              class="white--text text-capitalize mb-3"
              :ripple="false"
              v-if="userDetail.role === 'admin'"
              :to="{
                name: 'Election-Position-Edit',
                params: { position: position._id },
              }"
              >Update this position
            </v-btn>
            <v-btn
              depressed
              color="deep-purple darken-2"
              block
              class="white--text text-capitalize mb-3"
              :ripple="false"
              v-if="userDetail.role === 'admin'"
              :to="{
                name: 'Election-New-Candidate',
                params: {
                  position: position._id,
                  election: $route.params.election,
                },
              }"
              >Add Candidates to this position
            </v-btn>
            <PositionConfirmModal :id="position._id">
              <template v-slot:default="{ activator }">
                <v-btn
                  depressed
                  color="red darken-2"
                  block
                  text
                  v-bind="activator.attrs"
                  v-on="activator.on"
                  class="white--text text-capitalize mb-3"
                  :ripple="false"
                  v-if="userDetail.role === 'admin'"
                  >Remove this position
                </v-btn>
              </template>
            </PositionConfirmModal>
          </div>
        </div>
        <div class="candidates">
          <div class="election__title--wrapper py-3">
            <h2
              class="deep-purple--text darken-2 text-h6 text-md-h6 text-lg-h6 font-weight-bold workssan election__title text-center text-md-left py-2"
            >
              ကိုယ်စားလှယ်လောင်းများ
            </h2>
          </div>
          <div>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  v-for="candidate in election.candidates.filter(
                    (el) => el._post === position._id
                  )"
                  :key="candidate._id"
                >
                  <CandidateCard :candidate="candidate" />
                  <v-divider></v-divider>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CandidateCard from "@/components/Candidate/CandidateCard.vue";
import PositionConfirmModal from "@/components/Modal/PositionConfirmModal.vue";
import store from "@/store/index.js";
import { mapState } from "vuex";
export default {
  name: "Election",
  components: {
    CandidateCard,
    PositionConfirmModal,
  },
  computed: {
    ...mapState({
      election: (state) => state.election.election,
    }),
  },
  async beforeRouteEnter(to, from, next) {
    let election = store.state.election.election;

    if (!election || election._id !== to.params.election) {
      election = await store.dispatch(
        "election/getElection",
        to.params.election
      );
    }
    store.dispatch("UI/changeLoadingState", true);
    console.log(election);
    next();
  },
};
</script>

<style lang="scss" scoped>
.election {
  &__title {
    //  border-bottom: 2px solid #5545a8;

    &--wrapper {
      width: 100%;
      display: block;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #5545a8;
      }
    }
  }
  &__title {
    line-height: 1.75;
  }
  &__content {
    font-size: 17px;
    line-height: 2.5;
  }
  &__link {
    opacity: 0.7;
    cursor: pointer;
    //  border-bottom: 2px solid rgba(85, 69, 168, 0.3);
  }
}
.candidates {
  width: 100%;
}
</style>
