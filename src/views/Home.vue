<template>
  <div class="home container">
    <div class="row">hello</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  props: [],
  data() {
    return {};
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  methods: {},
  components: {}
};
</script>
