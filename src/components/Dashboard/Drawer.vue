<template>
  <div v-bind="$attrs">
    <div v-for="item in items" :key="item.name">
      <v-list-item
        v-if="!item.kids"
        key="dashboard"
        :to="{ name: 'Dashboard' }"
        router
        exact
      >
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
          to: "/",
          icon: "mdi-speedometer",
        },
        {
          name: "Staticstics",
          kids: [
            {
              name: "Elections",
              to: "/",
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          name: "Manage Roles",
          to: "/",
          icon: "mdi-account",
        },
      ],
    };
  },
};
</script>

<style></style>
