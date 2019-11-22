<template>
  <div class="Character container">
    <div class="row text-center">
      <div class="col-12 mb-3">
        <h1>
          {{activeCharacter.name}}
          <i
            class="fas fa-edit editbutton"
            title="Edit Character"
            data-toggle="modal"
            data-target="#editCharacterModal"
          ></i>
        </h1>
        <small>
          Owned by
          <a v-bind:href="activeCharacter.ownerUrl">{{activeCharacter.ownerName}}</a>
        </small>
      </div>
      <div class="col-12 mb-3">
        <img :src="activeCharacter.image" class="characterImage" alt />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-4 offset-md-2">
        <p>
          <b>Name:</b>
          {{activeCharacter.name}}
        </p>
        <p>
          <b>Other Names:</b>
          {{activeCharacter.otherNames}}
        </p>
        <p>
          <b>Age:</b>
          {{activeCharacter.age}}
        </p>
        <p>
          <b>Gender:</b>
          {{activeCharacter.gender}} ({{activeCharacter.pronouns}})
        </p>
        <p>
          <b>Year Born:</b>
          {{activeCharacter.born}} {{activeCharacter.era}}
        </p>
        <p v-if="activeCharacter.diedIn">Year Died: {{activeCharacter.diedIn}}</p>
      </div>
      <div class="col-md-4">
        <p>
          <b>Season:</b>
          {{activeCharacter.season}}
        </p>
        <p>
          <b>Sect:</b>
          {{activeCharacter.sect}}
        </p>
        <p>
          <b>Soul Class:</b>
          {{activeCharacter.soulClass}}
        </p>
        <p>
          <b>Soul Shade:</b>
          {{activeCharacter.soulShade}}
        </p>
        <p>
          <b>Soul Level:</b>
          {{activeCharacter.soulLevel}}
        </p>
      </div>
      <div class="col-md-8 offset-md-2 mt-1">
        <p>
          <b>Other:</b>
          {{activeCharacter.other}}
        </p>
      </div>
    </div>
    <div class="row topline pb-3">
      <div class="col-md-4 offset-md-2">
        <p class="mt-3">
          <b>Soul Partner:</b>
          {{activeCharacter.soulPartner}}
        </p>
        <p>
          <b>Mate:</b>
          {{activeCharacter.mate}}
        </p>
        <p>
          <b>Family:</b>
          {{activeCharacter.family}}
        </p>
      </div>
      <div class="col-md-4">
        <div class="progress mt-3" style="height: 23px;">
          <div
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            v-bind:style="{ width: activeCharacter.INT + '0%' }"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >Intelligence: {{activeCharacter.INT}}</div>
        </div>
        <div class="progress mt-3" style="height: 23px;">
          <div
            class="progress-bar progress-bar-striped bg-primary"
            role="progressbar"
            v-bind:style="{ width: activeCharacter.CHAR + '0%' }"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >Charisma: {{activeCharacter.CHAR}}</div>
        </div>
        <div class="progress mt-3" style="height: 23px;">
          <div
            class="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            v-bind:style="{ width: activeCharacter.STAM + '0%' }"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >Stamina: {{activeCharacter.STAM}}</div>
        </div>
        <div class="progress mt-3" style="height: 23px;">
          <div
            class="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            v-bind:style="{ width: activeCharacter.STR + '0%' }"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >Strength: {{activeCharacter.STR}}</div>
        </div>
        <div class="progress mt-3" style="height: 23px;">
          <div
            class="progress-bar progress-bar-striped bg-dark"
            role="progressbar"
            v-bind:style="{ width: activeCharacter.SPD + '0%' }"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >Speed: {{activeCharacter.SPD}}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-between py-2">
        <h2>About</h2>
        <button v-if="!newSectShow" class="btn btn-secondary" @click="newSectShow = !newSectShow">
          <i class="fas fa-plus"></i> Add Section
        </button>
      </div>
    </div>
    <div class="row" v-if="newSectShow">
      <div class="col">
        <form width="100" @submit.prevent="newSect()">
          <div class="form-row">
            <div class="form-group col-md-10">
              <input
                v-model="newSect.title"
                type="text"
                class="form-control"
                id="title"
                placeholder="Title"
                required="true"
              />
            </div>
            <div class="form-group col-md-2">
              <input
                v-model="newSect.order"
                type="number"
                class="form-control"
                id="order"
                placeholder="Order"
                required="true"
              />
            </div>
            <div class="form-group col-md-12">
              <textarea
                v-model="newSect.body"
                class="form-control"
                id="body"
                rows="3"
                placeholder="Your content here"
              ></textarea>
            </div>
          </div>
          <div class="row d-flex justify-content-end">
            <button type="submit" class="btn btn-success mx-2">Submit</button>
            <button @click="newSectShow = !newSectShow" class="btn btn-danger mx-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    <editcharactermodal></editcharactermodal>
  </div>
</template>

<script>
// @ is an alias to /src
import editcharactermodal from "@/components/EditCharacterModal.vue";

export default {
  name: "Character",
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  props: ["characterId"],
  data() {
    return {
      newSectShow: false,
      newSect: {
        character: this.$store.state.activeCharacter
      }
    };
  },
  computed: {
    activeCharacter() {
      return this.$store.state.activeCharacter;
    }
  },
  methods: {},
  components: {
    editcharactermodal
  }
};
</script>

<style>
.characterImage {
  max-width: 60vw;
  max-height: 40vh;
}
.topline {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.bg-info {
  background-color: #781092 !important;
}

.editbutton {
  font-size: 17px;
  color: rgb(179, 179, 179);
  cursor: pointer;
}
</style>
