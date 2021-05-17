<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loginNeeded: false
    };
  },
  methods: {},
  computed: {
    ...mapState({
      authenticated: state => !!state.user.user
    })
  },
  render() {
    return this.$scopedSlots.default({
      authenticated: this.authenticated,
      showLoginAction: this.show,
      hideLoginAction: this.hide
    });
  }
};
</script>

<style></style>
