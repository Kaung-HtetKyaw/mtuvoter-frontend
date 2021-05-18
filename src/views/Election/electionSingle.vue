/* eslint-disable */
<template>
  <div>
    <v-container
      v-if="loading || !election"
      class="loading-wrapper d-flex justify-center align-center"
    >
      <Loader />
    </v-container>
    <v-container class="election py-0 mb-16" v-else>
      <v-row v-if="election.raced">
        <v-col cols="12" sm="12">
          <v-alert
            dismissible
            color="red darken-4"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-cloud-alert"
            class="text-body-2 text-md-subtitle-1"
            transition="scale-transition"
          >
            This election has already been called raced. You can see
            <router-link
              :to="{
                name: 'Election-Result',
                params: { election: election._id }
              }"
              class="text-decoration-underline font-weight-medium"
              >the results here.</router-link
            >
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          v-if="
            authenticated &&
              (userDetail.role === 'admin' || userDetail.role === 'mod') &&
              election.started &&
              !election.raced
          "
        >
          <v-alert
            dismissible
            color="deep-purple darken-4"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-information"
            class="text-body-2 text-md-subtitle-1"
            transition="scale-transition"
          >
            As a moderator, you can generate guest token
            <router-link
              :to="{
                name: 'Generate-Guest-Token',
                params: { election: election._id }
              }"
              class="text-decoration-underline font-weight-medium"
              >here for the guest users.
            </router-link>
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
              class="deep-purple--text darken-4 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan election__title text-center text-md-left py-2"
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
              v-if="authenticated && userDetail.role === 'admin'"
              :to="{
                name: 'Election-New-Position',
                params: { election: election._id }
              }"
            >
              <v-btn
                color="deep-purple darken-4"
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
              v-for="(position, position_index) in election.positions"
              :key="position._id"
            >
              <h3
                class="election__link py-2 deep-purple--text darken-4"
                @click="$vuetify.goTo(`#position-${position_index}`)"
              >
                {{ position.name }}
              </h3>
              <v-divider class="my-2"></v-divider>
            </div>
            <div>
              <router-link
                :to="{
                  name: 'Election-Result',
                  params: { election: $route.params.election }
                }"
              >
                <h3 class="election__link py-2 deep-purple--text darken-4">
                  မဲရလဒ်များ
                </h3></router-link
              >

              <v-divider class="my-2"></v-divider>
            </div>
            <div class="width-100">
              <router-link
                v-if="authenticated && userDetail.role === 'admin'"
                :to="{
                  name: 'Election-Edit',
                  params: { election: election._id }
                }"
              >
                <v-btn
                  color="deep-purple darken-4"
                  class="white--text text-capitalize"
                  depressed
                  block
                  :ripple="false"
                  >Edit this election</v-btn
                ></router-link
              >
            </div>
            <div
              class="width-100 my-3"
              v-if="
                authenticated &&
                  (userDetail.role === 'admin' || userDetail.role === 'mod')
              "
            >
              <v-btn
                color="deep-purple darken-4"
                class="white--text text-capitalize"
                depressed
                block
                :ripple="false"
                @click="changePublishedFlag"
                :loading="changing_published_flag"
                >{{
                  election.published
                    ? "Unpublish this election"
                    : "Publish this election"
                }}</v-btn
              >
            </div>
            <div class="width-100 mt-3">
              <ElectionConfirmModal
                :id="election._id"
                v-if="authenticated && userDetail.role === 'admin'"
              >
                <template v-slot:default="{ activator }">
                  <v-btn
                    color="red darken-4"
                    class="white--text text-capitalize"
                    depressed
                    block
                    v-bind="activator.attrs"
                    v-on="activator.on"
                    :ripple="false"
                    >Delete this election</v-btn
                  >
                </template>
              </ElectionConfirmModal>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row
        v-for="(position, position_index) in election.positions"
        :key="position._id"
      >
        <v-col
          cols="12"
          sm="12"
          md="9"
          class="d-flex flex-column justify-center align-start"
          :id="'position-' + position_index"
        >
          <div class="election__title--wrapper py-3">
            <h1
              class="deep-purple--text darken-4 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan election__title text-center text-md-left py-2"
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
                color="deep-purple darken-4"
                block
                class="white--text text-capitalize mb-3"
                :ripple="false"
                v-if="authenticated && userDetail.role === 'admin'"
                :to="{
                  name: 'Election-Position-Edit',
                  params: { position: position._id }
                }"
                >Update this position
              </v-btn>
              <v-btn
                depressed
                color="deep-purple darken-4"
                block
                class="white--text text-capitalize mb-3"
                :ripple="false"
                v-if="authenticated && userDetail.role === 'admin'"
                :to="{
                  name: 'Election-New-Candidate',
                  params: {
                    position: position._id,
                    election: $route.params.election
                  }
                }"
                >Add Candidates to this position
              </v-btn>
              <PositionConfirmModal :id="position._id">
                <template v-slot:default="{ activator }">
                  <v-btn
                    depressed
                    color="red darken-4"
                    block
                    text
                    v-bind="activator.attrs"
                    v-on="activator.on"
                    class="white--text text-capitalize mb-3"
                    :ripple="false"
                    v-if="authenticated && userDetail.role === 'admin'"
                    >Remove this position
                  </v-btn>
                </template>
              </PositionConfirmModal>
            </div>
          </div>
          <div class="candidates">
            <div class="election__title--wrapper py-3">
              <h2
                class="deep-purple--text darken-4 text-h6 text-md-h6 text-lg-h6 font-weight-bold workssan election__title text-center text-md-left py-2"
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
                      el => el._post === position._id
                    )"
                    :key="candidate._id"
                  >
                    <CandidateCard
                      :candidate="candidate"
                      :vote_status="vote_status[position_index].status"
                      :election="election"
                    />
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const CandidateCard = () => import(/* webpackPrefetch: true */"@/components/Candidate/CandidateCard.vue");
const PositionConfirmModal = () =>
  import(/* webpackPrefetch: true */"@/components/Modal/PositionConfirmModal.vue");
const ElectionConfirmModal = () =>
  import(/* webpackPrefetch: true */"@/components/Modal/ElectionConfirmModal.vue");
const Loader = () => import(/* webpackPrefetch: true */"@/components/Base/BaseLoader.vue");
import store from "@/store/index.js";
import axios from "@/services/axios.js";
import { mapState } from "vuex";
import { showNoti } from "@/utils/noti.js";
export default {
  name: "Election",
  components: {
    CandidateCard,
    PositionConfirmModal,
    ElectionConfirmModal,
    Loader
  },
  data() {
    return {
      vote_status: [],
      loading: true,
      changing_published_flag: false
    };
  },
  computed: {
    ...mapState({
      election: state => state.election.election
    })
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
    next();
  },
  async created() {
    await this.setVoteStatuses();
  },
  methods: {
    async setVoteStatuses() {
      const vm = this;
      vm.setDefaultVoteStatus();
      await Promise.all(
        vm.election.positions.map(el => vm.setVoteStatus(el._id))
      )
        .then(() => {
          vm.loading = false;
        })
        .catch(() => {
          vm.loading = false;
        });
    },
    async setVoteStatus(position) {
      const vm = this;
      let vote_status = vm.vote_status.find(el => el.position === position);

      await this.fetchVoteStatus(position)
        .then(res => {
          vote_status.status = res.data.data;
        })
        .catch(() => {
          vote_status.status = false;
        });
    },
    async fetchVoteStatus(positionId) {
      return axios().get(
        `/users/vote-status/elections/${this.election._id}/positions/${positionId}`
      );
    },
    setDefaultVoteStatus() {
      const vm = this;
      const positions = vm.election.positions;
      positions.forEach(el => {
        vm.vote_status.push({ position: el._id, status: false });
      });
    },

    async changePublishedFlag() {
      const vm = this;
      vm.changing_published_flag = true;
      await store
        .dispatch("election/changePublishedFlag", {
          electionId: vm.election._id
        })
        .then(res => {
          vm.changing_published_flag = false;
          showNoti(
            "success",
            `This election has been ${
              res.published ? "published" : "unpublished"
            }`
          );
        })
        .catch(() => {
          vm.changing_published_flag = false;
        });
    }
  }
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
    opacity: 0.9;
    cursor: pointer;
    //  border-bottom: 2px solid rgba(85, 69, 168, 0.3);
  }
}
.candidates {
  width: 100%;
}
.raced-banner {
  height: 120px;
}
.loading-wrapper {
  width: 100%;
  height: 100vh;
}
</style>
