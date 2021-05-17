<template>
  <v-container class="py-0">
    <v-row class="py-0">
      <v-col cols="12" sm="12" md="6" class="px-0 d-flex justify-space-between">
        <div class="px-2">
          <v-icon>mdi-hammer</v-icon>
        </div>
        <div class="px-2 ">
          <div class="text-body-2">
            <span class="font-weight-bold pr-2 ">{{ log.by }}:</span>
            <span
              :style="{
                color: color
              }"
              class="font-weight-medium text-capitalize"
              >{{ log.type }}</span
            >
            {{ log.resource.split(" ")[0] }}
            <span class="resource">{{ log.resource.split(" ")[1] }}</span>
          </div>
          <div class="text--secondary workssan text-caption my-1">
            <span>{{ new Date(`${log.createdAt}`).toLocaleString() }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="py-0">
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BaseLogCard",
  props: {
    log: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      type_color: {
        create: {
          color: "#00C853"
        },
        update: {
          color: "#F57F17"
        },
        delete: {
          color: "#F50057"
        },
        other: {
          color: "#5545A8"
        }
      }
    };
  },
  computed: {
    color() {
      return this.type_color[`${this.log.type}`]
        ? this.type_color[`${this.log.type}`].color
        : this.type_color.other.color;
    }
  }
};
</script>

<style lang="scss" scoped>
.resource {
  background-color: #efefef;
  padding: 3px 5px;
  border-radius: 5px;
}
</style>
