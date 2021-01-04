<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loginNeeded: false,
    };
  },
  methods: {
    show() {
      if (!this.authorized) this.loginNeeded = true;
    },
    hide() {
      if (!this.authorized) this.loginNeeded = false;
    },
  },
  computed: {
    ...mapState({
      authorized: (state) => !!state.user.user,
    }),
  },
  render() {
    return this.$scopedSlots.default({
      loginNeeded: this.loginNeeded,
      showLoginAction: this.show,
      hideLoginAction: this.hide,
    });
  },
};
</script>

<style></style>
