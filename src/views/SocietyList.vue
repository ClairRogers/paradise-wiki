<template>
  <div class="societylist container">
    <p>hello world</p>
    <!-- <div class="row">
      <div class="col-8 offset-2 mt-3 mb-3">
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#characterModal"
        >Add Society</button>
      </div>
    </div>
    <charactermodal></charactermodal>-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "societylist",
  mounted() {
    // this.$store.dispatch("getSocieties");
  },
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {
    compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
  },
  components: {}
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
