<template>
  <v-container class="news-card-2">
    <router-link :to="{ name: 'News-Single', params: { news: 'alo' } }">
      <v-row class="flex-column-reverse flex-md-row">
        <v-col cols="12" sm="12" md="10">
          <h2 class="text-decoration-underline my-2 news-card-2__title">
            မဲစာရင်းမိတ္တူကူးယူရန်ကိစ္စနှင့်စပ်လျဉ်း၍
            အသိပေးကြေညာချက်ထုတ်ပြန်ခြင်း
          </h2>
          <p class="my-2 news-card-2__description">
            ပြည်ထောင်စုရွေးကောက်ပွဲကော်မရှင်သည် ၂၀၂၀ ပြည့်နှစ် နိုဝင်ဘာလ ၈
            ရက်နေ့တွင် ကျင်းပခဲ့သည့် ပါတီစုံဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲအတွက်
            မဲစာရင်းများကို ၂၅-၇-၂၀၂၀ ရက်နေ့ မှ ၁၄-၈-၂၀၂၀ ရက်နေ့အထိတစ်ကြိမ်၊
            ၁-၁၀-၂၀၂၀ ရက်နေ့မှ ၁၄-၁၀-၂၀၂၀ ရက်နေ့အထိ တစ်ကြိမ်
            မဲဆန္ဒရှင်ပြည်သူများသို့ .....
          </p>
          <p class="news-card-2__date text-right my-2">8 Aug 2020</p>
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <v-sheet
            height="150px"
            :style="{
              backgroundImage: `url(/img/mtu-img.jpg)`,
            }"
            class="news-card-2__img"
          ></v-sheet>
        </v-col> </v-row
    ></router-link>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.news-card-2 {
  cursor: pointer;
  &__img {
    background-size: contain;
    background-position: center;
  }
  &__date {
    font-size: 13px;
    opacity: 0.5;
  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
