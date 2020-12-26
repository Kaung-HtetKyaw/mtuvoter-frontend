<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
export default {
  name: "AppLayout",
  data() {
    return {
      layout: DefaultLayout,
    };
  },
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = component?.default || DefaultLayout;
        } catch (e) {
          this.layout = DefaultLayout;
        }
      },
    },
  },
};
</script>

<style></style>
