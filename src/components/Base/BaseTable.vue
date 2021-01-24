<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th
            class="text-left text-capitalize font-weight-bold text-subtitle-2"
            v-for="heading in headings"
            :key="heading"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td v-for="heading in headings" :key="heading">
            {{ item[heading] }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: "BaseTable",
  props: {
    items: {
      type: Array,
      required: true,
    },
    headings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
