<template>
  <div v-bind="$attrs">
    <div>
      <router-link :to="{ name: 'Home' }" class="router-link">
        <v-list-item class="d-flex justify-center align-center">
          <v-avatar size="40">
            <img src="/img/user-avatar.png" alt="John Doe" />
          </v-avatar>
          <v-list-item-title class="ml-4 body-1 admin--text">
            <span class="d-block text-caption">Logged in as</span>
            <span class="workssan">John Doe</span>
          </v-list-item-title>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
      </router-link>
    </div>
    <div v-for="item in items" :key="item.name">
      <v-list-item v-if="!item.kids" key="dashboard" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon small color="#ffffffbf">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="admin--text workssan">{{
            item.name
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group v-else :value="false">
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon small color="#ffffffbf">mdi-speedometer</v-icon>
          </v-list-item-action>
          <v-list-item-title class="admin--text workssan">{{
            item.name
          }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="{ name, to, icon } in item.kids"
          :key="name"
          :to="to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon small color="#ffffffbf">{{ icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="admin--text workssan">{{
              name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNavigationDrawer",
  data() {
    return {
      items: [
        {
          name: "Dashboard",
          to: { name: "Dashboard" },
          icon: "mdi-speedometer",
        },
        {
          name: "Staticstics",
          kids: [
            {
              name: "Elections",
              to: { name: "Dashboard-Elections" },
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          name: "Manage Roles",
          to: { name: "Dashboard-Roles" },
          icon: "mdi-account",
        },
        {
          name: "View Logs",
          to: { name: "Dashboard-Logs" },
          icon: "mdi-account",
        },
        {
          name: "Back to Home",
          to: "/",
          icon: "mdi-home-outline",
        },
      ],
    };
  },
};
</script>

<style></style>
