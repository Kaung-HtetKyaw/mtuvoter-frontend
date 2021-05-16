<template>
  <div>
    <NotiBar v-for="noti in notifications" :key="noti.id" :noti="noti" />
  </div>
</template>

<script>
const NotiBar = () => import("@/components/Base/BaseNotification.vue")
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
};
</script>

<style></style>
