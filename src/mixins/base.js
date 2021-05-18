import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      userDetail: state => state.user.user,
      authenticated: state => !!state.user.user,
      isMod : state => !!state.user.user && (state.user.user.role === 'mod' || state.user.user.role === 'admin'),
      isAdmin: state => !!state.user.user && state.user.user.role === 'admin'
    })
  }
};
