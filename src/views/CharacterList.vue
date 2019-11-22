<template>
  <div class="home container">
    <div class="row">
      <div class="col-8 offset-2 mt-3 mb-3">
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#characterModal"
        >Add Character</button>
      </div>
    </div>
    <div class="row">
      <div v-for="character in characters" class="col-md-4">
        <div class="card">
          <img :src="character.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
            <button class="btn btn-secondary" @click="setActiveCharacter(character)">View Character</button>
          </div>
        </div>
      </div>
    </div>

    <charactermodal></charactermodal>
  </div>
</template>

<script>
// @ is an alias to /src
import charactermodal from "@/components/CharacterModal.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  props: [],
  data() {
    return {
      newCh: {},
      editCh: {
        //need the ID
      }
    };
  },
  computed: {
    characters() {
      return this.$store.state.characters.sort(this.compare);
    }
  },
  methods: {
    setActiveCharacter(character) {
      this.$store.dispatch("setActiveCharacter", character);
    },
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
  components: {
    charactermodal
  }
};
</script>
