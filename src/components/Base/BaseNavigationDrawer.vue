<template>
  <div>
    <transition-group tag="div">
      <v-list-item
        v-for="item in authorityItem"
        :key="item.title"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        class="admin--text"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        :to="{ name: 'Login' }"
        router
        exact
        key="login"
        v-if="!authenticated"
      >
        <v-list-item-content>
          <v-btn
            color="deep-purple darken-2"
            class="white--text text-capitalize"
            depressed
            >Log in</v-btn
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item key="sign_out" exact v-if="authenticated">
        <v-list-item-content>
          <v-btn
            color="deep-purple darken-2"
            class="white--text text-capitalize"
            depressed
            :ripple="false"
            :loading="logging_out"
            @click="signOut"
            >Sign out</v-btn
          >
        </v-list-item-content>
      </v-list-item>
    </transition-group>
  </div>
</template>

<script>
import authMixin from "@/mixins/auth.js";
const defaultItem = [
  {
    icon: "mdi-chart-bubble",
    title: "Elections",
    to: { name: "Elections" },
    auth: false,
  },
  {
    icon: "mdi-account-group",
    title: "Newsletter",
    to: { name: "Newsletter" },
  },
  {
    icon: "mdi-account-group",
    title: "FAQ",
    to: { name: "FAQ" },
  },
];
const authorityItem = [
  {
    icon: "mdi-account-tie",
    title: "Dashboard",
    to: { name: "Dashboard" },
  },
  {
    icon: "mdi-account-cog",
    title: "Account Setting",
    to: { name: "Account" },
  },
];

export default {
  name: "BaseNavigationDrawer",
  mixins: [authMixin],
  computed: {
    items() {
      const vm = this;
      return vm.user
        ? [
            {
              icon: "mdi-newspaper-variant-outline",
              title: "Create new Article",
              to: { name: "new" },
            },
            {
              icon: "#",
              title: "Tags",
              to: "/t",
            },
            {
              icon: "mdi-format-list-bulleted",
              title: "Saved",
              to: { name: "by-saved", params: { by: vm.user.uid } },
            },
            {
              icon: "mdi-cog",
              title: "Settings",
              to: { name: "by-settings", params: { by: vm.user.uid } },
            },
            {
              icon: "mdi-account-group",
              title: "Topics",
              to: { name: "topics" },
            },
            {
              icon: "mdi-account-multiple-plus",
              title: "Create new Topic",
              to: { name: "topics-new" },
            },
          ]
        : defaultItem;
    },
    authorityItem() {
      const user = this.userDetail;
      return user ? (user.role === "admin" ? authorityItem : []) : [];
    },
  },
};
</script>

<style></style>
