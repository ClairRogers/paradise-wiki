<template>
  <div class="charactermodal">
    <div
      class="modal fade"
      id="characterModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="characterModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="characterModalTitle">Add Character</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <form @submit.prevent="newChara()">
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="name">
                    Name
                    <span style="color: red">*</span>
                  </label>
                  <input
                    v-model="newCh.name"
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    required="true"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="otherNames">Other Names</label>
                  <input
                    v-model="newCh.otherNames"
                    type="text"
                    class="form-control"
                    id="otherNames"
                    placeholder="Nicknames/Previous Names"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="image">Picture</label>
                  <input
                    v-model="newCh.image"
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="Image URL"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="year">Age</label>
                  <input
                    v-model="newCh.years"
                    type="number"
                    class="form-control"
                    id="years"
                    placeholder="Years"
                    width="50"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="months">.</label>
                  <input
                    v-model="newCh.months"
                    type="number"
                    class="form-control"
                    id="months"
                    placeholder="Months"
                    width="50"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="yearborn">Year Born</label>
                  <input
                    v-model="newCh.born"
                    type="number"
                    class="form-control"
                    id="yearborn"
                    placeholder="Year"
                    width="50"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="eraborn">.</label>
                  <select v-model="newCh.era" id="eraborn" class="form-control">
                    <option>BR</option>
                    <option>AC</option>
                  </select>
                  <small
                    id="otherHelp"
                    class="form-text text-muted"
                  >Before Reckoning / After Cleanse</small>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="gender">Gender</label>
                  <input
                    v-model="newCh.gender"
                    type="text"
                    class="form-control"
                    id="gender"
                    placeholder="Gender"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="pronouns">Pronouns</label>
                  <input
                    v-model="newCh.pronouns"
                    type="text"
                    class="form-control"
                    id="pronouns"
                    placeholder="ex: she/her, they/them"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="sect">Sect</label>
                  <input
                    v-model="newCh.sect"
                    type="text"
                    class="form-control"
                    id="sect"
                    placeholder="Underling, Lostling, etc"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="season">Season</label>
                  <select v-model="newCh.season" id="season" class="form-control">
                    <option>The Paradise Trials</option>
                    <option>Paradise Rising</option>
                    <option>None</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="season">Alive?</label>
                  <div class="mt-2 ml-2">
                    <div class="form-check form-check-inline">
                      <input
                        v-model="newCh.alive"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="true"
                      />
                      <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline ml-2">
                      <input
                        v-model="newCh.alive"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="false"
                      />
                      <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                  </div>
                </div>
                <div v-if="newCh.alive == 'false'" class="form-group col-md-4">
                  <label for="diedIn">Year Died</label>
                  <input
                    v-model="newCh.diedIn"
                    type="text"
                    class="form-control"
                    id="diedIn"
                    placeholder="Year and Era (BR or AC)"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="soulClass">Soul Class</label>
                  <select v-model="newCh.soulClass" id="soulClass" class="form-control">
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Black</option>
                    <option>Purple</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="soulShade">Soul Shade</label>
                  <input
                    v-model="newCh.soulShade"
                    type="text"
                    class="form-control"
                    id="soulShade"
                    placeholder="ex: Umber, Royal, Tempest"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="soulLevel">Soul Level</label>
                  <input
                    v-model="newCh.soulLevel"
                    type="number"
                    class="form-control"
                    id="soulLevel"
                    placeholder="Level"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="soulPartner" class="d-flex justify-content-between">
                    Soul Partner
                    <!-- <span v-if="newSoulPartner == true">
                      <i
                        class="fas fa-times-circle text-danger"
                        @click="newSoulPartner = !newSoulPartner"
                      ></i>
                    </span>
                    <span v-if="newSoulPartner == false">
                      <i
                        class="fas fa-plus-circle text-success"
                        @click="newSoulPartner = !newSoulPartner"
                      ></i>
                    </span>-->
                  </label>
                  <!-- <div v-for="ch in newCh.soulPartner">
                    <p>{ch.title, ch.name}</p>
                  </div>-->
                  <input
                    v-model="newCh.soulPartner"
                    type="text"
                    class="form-control"
                    id="soulPartner"
                    placeholder="Soul Partner"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="mate" class="d-flex justify-content-between">
                    Mate
                    <!-- <span v-if="newMate == true">
                      <i class="fas fa-times-circle text-danger" @click="newMate = !newMate"></i>
                    </span>
                    <span v-if="newMate == false">
                      <i class="fas fa-plus-circle text-success" @click="newMate = !newMate"></i>
                    </span>-->
                  </label>
                  <!-- <div v-for="ch in newCh.mate">
                    <p>{ch.title, ch.name}</p>
                  </div>-->
                  <input
                    v-model="newCh.mate"
                    type="text"
                    class="form-control"
                    id="mate"
                    placeholder="Mate"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="family" class="d-flex justify-content-between">
                    Family
                    <!-- <span v-if="newMate == true">
                      <i class="fas fa-times-circle text-danger" @click="newMate = !newMate"></i>
                    </span>
                    <span v-if="newMate == false">
                      <i class="fas fa-plus-circle text-success" @click="newMate = !newMate"></i>
                    </span>-->
                  </label>
                  <!-- <div v-for="ch in newCh.family">
                    <p>{ch.title, ch.name}</p>
                  </div>-->
                  <input
                    v-model="newCh.family"
                    type="text"
                    class="form-control"
                    id="family"
                    placeholder="Family"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="owner">Player</label>
                  <input
                    v-model="newCh.ownerName"
                    type="text"
                    class="form-control"
                    id="owner"
                    placeholder="Owner's name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="ownerUrl">Player's Profile</label>
                  <input
                    v-model="newCh.ownerUrl"
                    type="text"
                    class="form-control"
                    id="ownerUrl"
                    placeholder="URL link to DeviantART profile, etc"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md">
                  <label for="INT">INT</label>
                  <input
                    v-model="newCh.INT"
                    type="number"
                    class="form-control"
                    id="INT"
                    placeholder="INT"
                  />
                </div>
                <div class="form-group col-md">
                  <label for="CHAR">CHAR</label>
                  <input
                    v-model="newCh.CHAR"
                    type="number"
                    class="form-control"
                    id="CHAR"
                    placeholder="CHAR"
                  />
                </div>
                <div class="form-group col-md">
                  <label for="STAM">STAM</label>
                  <input
                    v-model="newCh.STAM"
                    type="number"
                    class="form-control"
                    id="STAM"
                    placeholder="STAM"
                  />
                </div>
                <div class="form-group col-md">
                  <label for="STR">STR</label>
                  <input
                    v-model="newCh.STR"
                    type="number"
                    class="form-control"
                    id="STR"
                    placeholder="STR"
                  />
                </div>
                <div class="form-group col-md">
                  <label for="SPD">SPD</label>
                  <input
                    v-model="newCh.SPD"
                    type="number"
                    class="form-control"
                    id="SPD"
                    placeholder="SPD"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="other">Other Important Info</label>
                  <input v-model="newCh.other" type="text" class="form-control" id="other" />
                  <small
                    id="otherHelp"
                    class="form-text text-muted"
                  >Include any important information here. Note: large sections of text should not be added here.</small>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "charactermodal",
  mounted() {
    this.modalAutoFocus;
  },
  props: [],
  data() {
    return {
      newSoulPartner: false,
      newMate: false,
      newCh: {}
    };
  },
  computed: {},
  methods: {
    newChara() {
      if (this.newCh.years && this.newCh.years != "") {
        if (this.newCh.months && this.newCh.months != "") {
          this.newCh.age = `${this.newCh.years} years ${this.newCh.months} months`;
        } else {
          this.newCh.age = `${this.newCh.years} years`;
        }
      } else if (this.newCh.months && this.newCh.months != "") {
        this.newCh.age = `${this.newCh.months} months`;
      }
      this.newCh.name =
        this.newCh.name.charAt(0).toUpperCase() + this.newCh.name.substring(1);
      this.$store.dispatch("newChara", this.newCh);
      this.$store.dispatch("getCharacters");
      this.newCh = {};
    }
  },
  components: {}
};
</script>