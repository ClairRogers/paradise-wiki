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
      <div class="col-12 text-left">
        <h1>A</h1>
      </div>
      <div v-for="character in characters" class="col-md-3 col-6">
        <div class="card pointer" @click="setActiveCharacter(character)">
          <img :src="character.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
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
      return this.$store.state.characters; //.sort(this.compare);
    },
    charactersA() {
      return this.$store.state.characters
        .filter(c => c.name.startsWith("A"))
        .sort(this.compare);
    },
    charactersA() {
      return this.$store.state.characters
        .filter(c => c.name.startsWith("B"))
        .sort(this.compare);
    },
    charactersA() {
      return this.$store.state.characters
        .filter(c => c.name.startsWith("C"))
        .sort(this.compare);
    },
    charactersA() {
      return this.$store.state.characters
        .filter(c => c.name.startsWith("D"))
        .sort(this.compare);
    },
    charactersA() {
      return this.$store.state.characters
        .filter(c => c.name.startsWith("E"))
        .sort(this.compare);
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

<style>
.pointer {
  cursor: pointer;
}
</style>
