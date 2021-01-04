<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (v) => {
        return ["create", "update", "delete"].includes(v);
      },
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      baseUrl: `https://kgnatours.herokuapp.com/api/v1/news/`,
      loading: false,
      data: null,
    };
  },
  methods: {
    async writeNews(type, ...params) {
      this.loading = true;
      await this.axios[type](...params)
        .then((res) => {
          this.data = res.data;
          this.$emit("success", this.data);
          this.loading = false;
        })
        .catch((e) => {
          this.$emit("error", e);
          this.loading = false;
        });
    },
    create(data) {
      data.id = uuidv4();
      return this.writeNews("post", `${this.baseUrl}`, data);
    },
    destroy(id) {
      return this.writeNews("delete", `${this.baseUrl}/${id}`);
    },
    update(id, data) {
      return this.writeNews("patch", `${this.baseUrl}/${id}`, data);
    },
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      loading: this.loading,
      create: this.create,
      update: this.update,
      destroy: this.destroy,
    });
  },
};
</script>

<style></style>
