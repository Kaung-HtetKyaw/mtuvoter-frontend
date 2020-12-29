<template>
  <v-container class="election py-0">
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
            မန္တလေးနည်းပညာတက္ကသိုလ်ကျောင်းသားသမဂ္ဂ ရွေးကောက်ပွဲ ၂၀၂၀
          </h1>
        </div>
        <div class="election__content font-weight-medium my-4">
          <p>
            လွှတ်တော်ကိုယ်စားလှယ်လောင်းများ ရွေးကောက် တင်မြှောက်ခံနိုင်ရေး အတွက်
            အမည်စာရင်း တင်သွင်းလွှာ တင်သွင်းချိန်တွင် ပြည်သူ့လွှတ်တော်၊
            တိုင်းဒေသကြီး သို့မဟုတ် ပြည်နယ်လွှတ်တော် အတွက် အသက် (၂၅) နှစ်၊
            အမျိုးသားလွှတ်တော်အတွက် အသက် (၃၀) နှစ် ပြည့်ပြီး သက်ဆိုင်ရာ
            ရွေးကောက်ပွဲ ဥပဒေပါ ပြဌာန်းချက်များနှင့် မဆန့်ကျင်သူ၊
            လွှတ်တော်ကိုယ်စားလှယ်အဖြစ် ရွေးကောက်တင်မြှောက်ခံရသည့်
            အချိန်နှင့်တစ်ဆက်တည်း ပြည်ထောင်စုမြန်မာနိုင်ငံတော်တွင် အနည်းဆုံး
            (၁၀) နှစ် အခြေချ နေထိုင်ခဲ့သူ (နိုင်ငံတော်၏ ခွင့်ပြုချက်ဖြင့်
            နိုင်ငံခြားသို့ တရားဝင် သွားရောက်သည့် ကာလများကိုလည်း
            နိုင်ငံတော်တွင်အခြေချနေထိုင်ခဲ့သည့် ကာလအဖြစ် ထည့်သွင်း ရေတွက်ရန်)၊
            မဲစာရင်းတွင်ပါဝင်သူ ၊ နိုင်ငံသားမိဘနှစ်ပါးမှ မွေးဖွားသောနိုင်ငံသား
            ဖြစ်သူနှင့် သက်ဆိုင်ရာ
            ဥပဒေတွင်သတ်မှတ်ထားသည့်အရည်အချင်းများနှင့်ပြည့်စုံသူဖြစ်ရပါမည်။ (
            သက်ဆိုင်ရာလွှတ်တော်ရွေးကောက်ပွဲဥပဒေပုဒ်မ-၈)
          </p>
          <p>
            ရွေးကောက်တင်မြှောက်ခံပိုင်ခွင့်ရှိသူ တစ်ဦးသည်
            တစ်သီးပုဂ္ဂလအဖြစ်ဖြင့်ဖြစ်စေ နိုင်ငံရေးပါတီ
            တစ်ခုခုကိုကိုယ်စားပြု၍ဖြစ်စေရွေးကောက်ပွဲတွင်ဝင်ရောက်ယှဉ်ပြိုင်ခွင့်ရှိသည်။
            (သက်ဆိုင်ရာလွှတ်တော် ရွေးကောက်ပွဲဥပဒေပုဒ်မ-၉ )
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <div
          class="my-6 text-body-2 text-md-subtitle-1 text-center text-md-left"
        >
          <div>
            <h3 class="election__link py-2 deep-purple--text darken-2">
              အရည်အချင်းသတ်မှတ်ချက်
            </h3>
            <v-divider class="my-2"></v-divider>
          </div>

          <div>
            <h3 class="election__link py-2 deep-purple--text darken-2">
              အရည်အချင်းသတ်မှတ်ချက်
            </h3>
            <v-divider class="my-2"></v-divider>
          </div>
          <div>
            <h3 class="election__link py-2 deep-purple--text darken-2">
              အရည်အချင်းသတ်မှတ်ချက်
            </h3>
            <v-divider class="my-2"></v-divider>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
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
    //  border-bottom: 2px solid rgba(85, 69, 168, 0.3);
  }
}
</style>
