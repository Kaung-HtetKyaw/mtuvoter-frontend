import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      userDetail: state => state.user.user,
      authenticated: state => !!state.user.user
    })
  }
};
