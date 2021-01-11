<template>
  <v-row justify="end">
    <v-dialog scrollable v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <slot v-bind:activator="{ on, attrs }"></slot>
      </template>
      <v-card class="px-0 py-0 px-lg-6 py-lg-6">
        <div class="width-100 d-flex justify-end">
          <v-btn
            :ripple="false"
            class="mx-2"
            fab
            icon
            dark
            depressed
            color="deep-purple darken-2 rotate-45 my-2"
            x-small
            @click="dialog = false"
          >
            <v-icon dark class="rotate-45">
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
        <v-card-title
          class="px-2   px-lg-6 text-center d-flex justify-center align-center"
        >
          <span
            class=" text-subtitle-1 text-center text-md-h6 font-weight-bold deep-purple--text darken-2"
            >Add a Moerator for MTU Voter</span
          >
        </v-card-title>
        <v-card-text class="add-mod">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            outlined
            label="Search by email...."
            required
            dense
            class="pt-2"
          ></v-text-field>
          <div
            class="access-table__mod__wrapper px-4 py-4 rounded px-md-8 mb-3 rounded"
          >
            <div
              class="access-table__mod px-6 d-flex flex-column flex-md-row justify-md-space-between align-md-center justify-center align-space-between"
            >
              <div class="mod--info">
                <div
                  class="deep-purple--text darken-2 text-body-2 font-weight-bold text-decoration-underline"
                >
                  speed02749@gmail.com
                </div>
                <span class="text-caption">KaungHtetKyaw</span
                ><span class="font-weight-bold mx-1 text-h4">.</span
                ><span>Mod</span>
              </div>
            </div>
          </div>
          <v-btn
            dense
            color="deep-purple darken-2"
            class="white--text text-capitalize"
            depressed
            block
            :disabled="false"
            >Add KaungHtetKyaw as a moderator</v-btn
          >
          <div
            class="width-100 d-flex justify-center align-center no-result my-3 py-3 rounded"
          >
            Cannot find an account matching alflaflj@gmal
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "AddMod",
  data: () => ({
    dialog: false,
  }),
  watch: {
    dialog(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="scss">
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px;
}
.auth-info {
  li {
    margin: 10px 0;
  }
}
.add-mod {
  .access-table__mod {
    &__wrapper {
      background-color: #f6f8fa;
      border: 1px solid rgba(0, 0, 0, 0.39);
      cursor: pointer;
    }
  }
  .no-result {
    border: 1px solid rgba(0, 0, 0, 0.39);
    background-color: #f6f8fa;
  }
}
</style>
