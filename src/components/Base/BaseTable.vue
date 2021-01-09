<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left" v-for="heading in headings" :key="heading">
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
  // props:{
  //   items:{
  //     type:Array,
  //     required:true
  //   },
  //   heading:{
  //     type:Array,
  //     required:true
  //   }
  // },
  data() {
    return {
      items: [
        {
          createdAt: "2020-12-21T18:37:39.929Z",
          _id: "5fe0eb7fb96e760fb879dcb6",
          about: "br nayr sa mar ka lar",
          startDate: "2021-01-15T17:30:00.000Z",
          endDate: "2021-01-17T17:30:00.000Z",
          type: "student",
          name: "Student Union Election 2020",
          slug: "student-union-election-2020",
          raced: false,
          id: "5fe0eb7fb96e760fb879dcb6",
        },
        {
          createdAt: "2020-12-08T19:23:58.093Z",
          _id: "5fcfd2d261ad52120c1ff2b3",
          about: "Some details about studen union election 2020 ",
          startDate: "2020-12-16T17:30:00.000Z",
          endDate: "2020-12-17T17:30:00.000Z",
          type: "student",
          name: "Student Union Election 2020",
          slug: "student-union-election-2020",
          raced: true,
          id: "5fcfd2d261ad52120c1ff2b3",
        },
      ],
      headings: ["name", "startDate", "endDate", "raced"],
    };
  },
};
</script>
