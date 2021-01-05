<template>
  <v-container class="news__wrapper">
    <v-row>
      <v-col cols="12" sm="12">
        <div class="mb-3 mb-md-6">
          <h1
            class="deep-purple--text darken-2 text-h5 text-md-h5 text-lg-h5 font-weight-bold workssan news__title text-center text-md-left py-3"
          >
            မန္တလေးနည်းပညာတက္ကသိုလ်ကျောင်းသားသမဂ္ဂ ရွေးကောက်ပွဲ ၂၀၂၀
          </h1>
        </div>
        <v-container fluid class="px-0 py-0">
          <v-row class="flex-column-reverse flex-md-row">
            <v-col cols="12" sm="12" md="9" class="py-0">
              <div class="news__content">
                <vue-markdown :content="news.content"></vue-markdown>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" class=" py-0">
              <div
                :style="{
                  backgroundImage: `url(/img/mtu-img.jpg)`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }"
                class="news__cover"
              ></div
            ></v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Markdown from "@/components/Base/BaseMarkdown.vue";
export default {
  name: "News-Single",
  components: {
    "vue-markdown": Markdown,
  },
  data() {
    return {
      news: {
        content:
          "ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်သည် ပါတီစုံဒီမိုကရေစီစနစ်ကို ကျင့်သုံးရန် ၂၀၀၈ ခုနှစ် ဖွဲ့စည်းပုံအခြေခံဥပဒေဖြင့် ပြဌာန်း အတည်ပြုခဲ့ပါသည်။ ပါတီစုံဒီမိုကရေစီစနစ် သတ်မှတ်ခဲ့သဖြင့် လွှတ်တော် (၃)ရပ်နှင့် အစိုးရအဖွဲ့ ဖွဲ့စည်းရန် လွှတ်တော်ကိုယ်စားလှယ်များ ရွေးကောက်တင်မြှောက် နိုင်ရန်အတွက် ပါတီစုံ ဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲများကို ကျင်းပခဲ့ပါသည်။ မြန်မာနိုင်ငံတွင် ရွေးကောက်ပွဲများကို ဗြိတိသျှ ကိုလိုနီခေတ်မှစ၍ ကျင်းပခဲ့ပြီး လေ့လာကြည့် မည်ဆိုပါက ကာလအပိုင်းအခြား အားဖြင့် ခေတ် (၄)ခေတ်ကို တွေ့ရှိရမည်ဖြစ်ပါသည် -",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  &__title {
    width: 100%;
    display: block;
    position: relative;
    line-height: 1.75;
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
  &__cover {
    width: 100%;
    height: 300px;
  }
}
</style>
