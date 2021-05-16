<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        class="forgot__wrapper d-flex justify-center align-center"
      >
        <v-container>
          <v-row  v-if="loading" justify="center" class="d-flex justify-center align-center flex-column">
            <div class="deep-purple--text darken-4 font-weight-medium text-h6">Verifying your account</div>
            <BaseLoader/>
          </v-row>
          <v-row  v-if="verified" justify="center" class="d-flex justify-center align-center flex-column">

              <v-icon x-large color="deep-purple darken-4">mdi-account-check-outline</v-icon>
              <p class="deep-purple--text darken-4 font-weight-bold text-h6">Your account is verified now.</p>
               <router-link :to='{name:"Login"}' class="text-decoration-underline text-body-1">Log in to your account here</router-link>
          </v-row>
          <v-row  v-if="error" justify="center" class="d-flex justify-center align-center flex-column">
              <v-icon x-large color="deep-purple darken-4">mdi-emoticon-cry-outline</v-icon>
              <p class="deep-purple--text darken-4 font-weight-bold text-h6">{{error}}.</p>
              <router-link :to='{name:"Home"}' class="text-decoration-underline text-body-1">Back to Home</router-link>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const BaseLoader = () => import('@/components/Base/BaseLoader.vue')
import axios from '@/services/axios.js';
export default {
    components:{
        BaseLoader
    },
    data() {
        return {
            email: "",
            loading:true,
            error:null,
            verified:false
        };
    },
    async created() {
      const vm = this;
        await axios().patch(`/users/verify/${this.$route.params.token}`)
        .then(()=>{
          vm.loading = false;
          vm.verified = true;
        })
        .catch((e) => {
          vm.loading = false;
          console.log(e.response)
          if(e.response.data.message) {
            vm.error = e.response.data.message;
          } else {
            vm.error = 'Something went wrong'
          }
        })
    }
};
</script>

<style lang="scss" scoped>
.forgot__wrapper {
  width: 100%;
  height: 90vh;
}
.forgot__form {
  border: 1px solid rgba(0, 0, 0, 0.39);
}
</style>
