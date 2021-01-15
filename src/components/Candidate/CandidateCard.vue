<template>
  <v-container fluid class="candidate">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="py-0 px-0 d-flex flex-column candidate__info justify-center align-center align-md-start text-center text-md-left"
      >
        <h5 class="candidate__info__name text-h6 font-weight-bold underline">
          ကျော်တိုးတိုးဟန်
        </h5>

        <span class="candidate__info__type d-block font-weight-bold"
          >စတုတ္ထနှစ်</span
        >

        <span class="candidate__info__major d-block font-weight-bold"
          >ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ</span
        >
      </v-col>
      <v-col cols="12" sm="12" md="3" class="px-0">
        <div class="candidate__photo">
          <img
            class="borderedpicture"
            src="/img/mtu-candidate.jpg"
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
              လက်ရှိ မန္တလေးနည်းပညာတက္ကသိုလ်ကျောင်းသားသမဂ္ဂသည် လုပ်ငန်းအဖွဲ့
              အသီးသီးဖြင့် လုပ်ငန်းကိစ္စများကိုဆောင်ရွက်လျက်ရှိရာ
              ထိုလုပ်ငန်းအဖွဲ့များတွင် ပါဝင်လုပ်ကိုင်နိုင်ရန်အတွက်
              အလုပ်သင်များကို ခေါ်ယူသွားရန်ရှိပါသည်။
            </blockquote>
          </div>
          <div class="d-flex flex-column justify-center align-center">
            <div class="width-100">
              <div
                class="d-flex flex-column flex-md-row justify-center align-center"
              >
                <GuestLogin>
                  <template v-slot:default="{ activator }">
                    <v-btn
                      depressed
                      color="deep-purple darken-2"
                      block
                      v-bind="activator.attrs"
                      v-on="activator.on"
                      class="white--text text-capitalize"
                      :ripple="false"
                      >Vote
                    </v-btn>
                  </template>
                </GuestLogin>
              </div>
              <div
                class="d-flex flex-column flex-md-row justify-center align-center my-3"
              >
                <v-btn
                  depressed
                  color="deep-purple darken-2"
                  block
                  text
                  class="white--text text-capitalize"
                  :ripple="false"
                  exact
                  v-if="userDetail.role === 'admin'"
                  :to="{
                    name: 'Election-Candidate-Edit',
                    params: { candidate: 'alo' },
                  }"
                  >Update this candidate
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GuestLogin from "@/components/Form/GuestLogin.vue";

export default {
  name: "CandidateCard",
  components: {
    GuestLogin,
  },
  data() {
    return {};
  },
  methods: {
    alo() {
      alert("alo");
    },
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
