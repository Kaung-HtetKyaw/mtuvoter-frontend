<template>
  <div>
    <router-link :to="{ name: 'Home' }" class="router-link">
      <v-list-item class="d-flex justify-center align-center">
        <v-avatar size="40">
          <img src="/img/avatar-default.png" alt="John Doe" />
        </v-avatar>
        <v-list-item-title class="ml-4 body-1">
          John Doe
        </v-list-item-title>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
    </router-link>
  </div>
</template>

<script>
export default {
  //   props: {
  //     user: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
};
</script>

<style></style>
