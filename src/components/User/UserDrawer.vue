<template>
  <div>
    <router-link :to="{ name: 'Account' }" class="router-link">
      <v-list-item class="d-flex justify-center ">
        <v-avatar size="40">
          <img src="/img/user-avatar.png" :alt="userDetail.name" />
        </v-avatar>
        <v-list-item-title class="ml-4 body-1">
          {{ userDetail.name }}
          <v-icon small color="deep-purple darken-4">mdi-check-circle</v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
