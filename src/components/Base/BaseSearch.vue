<template>
  <v-text-field
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    prepend-inner-icon="mdi-magnify"
    placeholder="Search"
    class="expanding-search"
    :class="{ closed: searchClosed }"
    dense
    outlined
    background-color="#F5F5F5"
    elevation="0"
    :clearable="!searchClosed"
    color="#5056D2"
  >
  </v-text-field>
</template>

<script>
export default {
  name: "TheNav",
  data: () => ({
    drawer: false,
    group: null,
    searchClosed: true,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.v-input.expanding-search
   max-height: 45px
.closed
   max-width: 45px
</style>
