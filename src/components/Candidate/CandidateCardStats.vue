<template>
  <v-container fluid class="candidate">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="px-0">
        <div class="candidate__photo">
          <img
            class="borderedpicture"
            :src="candidate.photo"
            :alt="candidate.name"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="py-0 px-0 d-flex flex-column candidate__info justify-center align-center  text-center "
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
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <v-btn
          :to="{
            name: 'Dashboard-Staticstics-Candidate',
            params: {
              election: candidate._election,
              candidate: candidate._id,
              position: candidate._post,
            },
          }"
          color="deep-purple darken-2"
          class="white--text text-capitalize"
          depressed
          :ripple="false"
          >View Staticstics</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { yearMap, majorMap } from "@/utils/constants.js";
export default {
  name: "CandidateCard",
  components: {},
  props: {
    candidate: {
      type: Object,
      required: true,
    },
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
