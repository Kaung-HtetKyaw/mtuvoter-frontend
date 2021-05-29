<script>
import axios from '@/services/axios.js';
export default {
    data() {
        return {
            emailToSentResetLink:''
        }
    },
    methods:{
        async forgotPassword() {
            const vm = this;
            return axios().post(`/users/forgot`, { email: vm.emailToSentResetLink });
        }
    },
    render() {
        return this.$scopedSlots.default({
            forgotPassword: this.forgotPassword,
        })
    }
}
</script>

<style>

</style>