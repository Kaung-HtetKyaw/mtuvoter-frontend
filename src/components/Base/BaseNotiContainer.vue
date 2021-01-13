<template>
  <div>
    <NotiBar v-for="noti in notifications" :key="noti.id" :noti="noti" />
  </div>
</template>

<script>
import NotiBar from "@/components/Base/BaseNotification.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotiBar,
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notification.notifications,
    }),
  },
  created() {
    console.log(this.notifications);
  },
};
</script>

<style></style>
