<template>
  <div class="accordion">
    <div
      style="visibility: hidden; position: absolute; width: 0px; height: 0px;"
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 0 24 24" id="expand-more">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
        <symbol viewBox="0 0 24 24" id="close">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
      </svg>
    </div>
    <details class="py-4 px-4 py-lg-10 px-lg-10 text-body-2 text-md-h6 mx-0">
      <summary>
        <span class="font-weight-bold"> {{ faq.question }}</span>

        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p class="my-3 deep-purple--text lighten-3 font-weight-bold">
        {{ faq.answer }}
      </p>
    </details>
    <div
      class="d-block my-3 d-flex justify-end"
      v-if="
        (userDetail && userDetail.role === 'mod') || userDetail.role === 'admin'
      "
    >
      <v-btn
        color="deep-purple darken-4"
        class="white--text text-capitalize"
        depressed
        small
        :ripple="false"
        :to="{ name: 'FAQ-Edit', params: { faq: faq._id } }"
        >Edit</v-btn
      >
      <FAQConfirmModal :id="faq._id">
        <template v-slot:default="{ activator }">
          <v-btn
            color="red darken-4"
            text
            class="white--text text-capitalize"
            depressed
            small
            v-bind="activator.attrs"
            v-on="activator.on"
            :ripple="false"
            >Delete</v-btn
          >
        </template>
      </FAQConfirmModal>
    </div>
  </div>
</template>

<script>
import FAQConfirmModal from "@/components/Modal/FAQConfirmModal.vue";
export default {
  name: "BaseAccordion",
  components: {
    FAQConfirmModal,
  },
  props: {
    faq: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.accordion {
  width: 100%;
}
details {
  width: 100%;
  min-height: 5px;
  max-width: 100%;
  /* padding: 45px 70px 45px 45px; */
  position: relative;
  font-size: 22px;
  border: 1px solid rgba(85, 69, 168, 0.2);
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.3s;
}

details + details {
  margin-top: 20px;
}

details[open] {
  min-height: 50px;
  background-color: #f6f7f8;
  box-shadow: 2px 2px 20px rgba(85, 69, 168, 0.1);
}

details p {
  font-weight: 400;
  opacity: 0.7;
}

summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

summary:focus {
  outline: none;
}

summary:focus::after {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 0 5px rebeccapurple;
}

summary::-webkit-details-marker {
  display: none;
}

.control-icon {
  fill: rebeccapurple;
  transition: 0.3s ease;
  pointer-events: none;
}

.control-icon-close {
  display: none;
}

details[open] .control-icon-close {
  display: initial;
  transition: 0.3s ease;
}

details[open] .control-icon-expand {
  display: none;
}
</style>
