<template>
  <v-container fluid class="candidate">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="py-0 px-0 d-flex flex-column candidate__info justify-center align-center align-md-start text-center text-md-left"
      >
        <h5 class="candidate__info__name text-h6 font-weight-bold underline">
          {{ candidate.name }}
        </h5>

        <span class="candidate__info__type d-block font-weight-bold">{{
          yearMap[candidate.year] || yearMap["others"]
        }}</span>

        <span class="candidate__info__major d-block font-weight-bold">{{
          majorMap[candidate.major] || majorMap["CEIT"]
        }}</span>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="px-0">
        <div class="candidate__photo">
          <img
            class="borderedpicture"
            :src="candidate.photo"
            alt="putyourpicturesalttexthere"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="9" class="px-0 px-md-6">
        <div class="candidate__info font-weight-medium">
          <div>
            <blockquote
              class="candidate__quote font-weight-bold text--secondary px-3 py-3"
            >
              {{ candidate.promise || "No promise provided" }}
            </blockquote>
          </div>
          <div class="d-flex flex-column justify-center align-center">
            <div class="width-100">
              <div
                class="d-flex flex-column flex-md-row justify-center align-center"
              
              >
                <Vote :raced='raced' :candidate="candidate" :electionId="candidate._election">
                  <template v-slot:default="{ activator }">
                    <v-btn
                      depressed
                      color="deep-purple darken-4"
                      block
                      v-bind="activator.attrs"
                      v-on="activator.on"
                      class="white--text text-capitalize"
                      :disabled="voted || raced"
                      :ripple="false"
                      >Vote
                    </v-btn>
                  </template>
                </Vote>
              </div>
              <div v-if="raced">
                <p class="text-center text--secondary text-body-2 mt-1">This election has already been called raced.</p>
            
              </div>
              <div v-if="!raced && voted">
                <p class="text-center text--secondary text-body-2 mt-1">You have already voted for this position of the election.</p>
            
              </div>
              

              <div
                class="d-flex flex-column flex-md-row justify-center align-center my-3"
              >
                <v-btn
                  depressed
                  color="deep-purple darken-4"
                  block
                  text
                  class="white--text text-capitalize"
                  :ripple="false"
                  exact
                  v-if="authenticated && userDetail.role === 'admin'"
                  :to="{
                    name: 'Election-Candidate-Edit',
                    params: { candidate: candidate._id },
                  }"
                  >Update this candidate
                </v-btn>
              </div>
              <div
                class="d-flex flex-column flex-md-row justify-center align-center my-3"
              >
                <ConfirmModal :id="candidate._id">
                  <template v-slot:default="{ activator }">
                    <v-btn
                      depressed
                      color="red darken-4"
                      block
                      text
                      v-bind="activator.attrs"
                      v-on="activator.on"
                      class="white--text text-capitalize"
                      :ripple="false"
                      exact
                      v-if="authenticated && userDetail.role === 'admin'"
                      :disabled="raced"
                      >Remove this candidate
                    </v-btn></template
                  >
                </ConfirmModal>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vote from "@/components/Form/Vote.vue";
import ConfirmModal from "@/components/Modal/CandidateConfirmModal.vue";
import { yearMap, majorMap } from "@/utils/constants.js";

export default {
  name: "CandidateCard",
  components: {
    Vote,
    ConfirmModal,
  },
  props: {
    candidate: {
      type: Object,
      required: true,
    },
    raced:{
      type:Boolean,
      required:true
    },
    voted:{
      type:Boolean,
      required:true
    }
  },
  data() {
    return {
      yearMap,
      majorMap,
    };
  },
};
</script>

<style lang="scss">
.candidate {
  line-height: 2.5;
  &__photo {
    width: 100%;
    background-size: contain;
  }
  &__info {
  }
  &__quote {
    position: relative;
    border-left: none;
    &::before {
      content: "\201C";
      position: absolute;
      top: 0em;
      left: 0;
      transform: translate(-50%, -50%);
      background: #fff;
      width: 3rem;
      height: 2rem;
      font: 6em/1.08em "PT Sans", sans-serif;
      color: #666;
      text-align: center;
    }
  }
}

img.borderedpicture {
  background-color: #7d7d7d;
  // background-image: url("/img/mtu-candidate.jpg");
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  size: cover;
  padding: 3% 0 3% 0;
  margin: 1% 0 1% 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 6px solid #5545a8;
}
</style>
