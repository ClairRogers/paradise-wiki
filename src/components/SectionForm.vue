<template>
  <div class="sectionform col">
    <form @submit.prevent="newSection()">
      <div class="form-row">
        <div class="form-group col-md-12">
          <input
            v-model="newSect.title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            required="true"
          />
        </div>
        <div class="form-group col-md-12 text-left mb-2">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar btn-group">
              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
              >
                <i class="fas fa-bold"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
              >
                <i class="fas fa-italic"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
              >
                <i class="fas fa-strikethrough"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
              >
                <i class="fas fa-underline"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.code() }"
                @click="commands.code"
              >
                <i class="fas fa-code"></i>
              </button>

              <button
                class="btn btn-dark btn-sm"
                type="button"
                @click="setToTrue()"
                :class="{ 'is-active': isActive.link() }"
              >
                <i class="fas fa-link"></i>
              </button>

              <!-- <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
              >
                <i class="fas fa-paragraph"></i>
              </button>-->

              <!-- <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
              >
                <b>H1</b>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
              >
                <b>H2</b>
              </button>-->

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
              >
                <b>H3</b>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
              >
                <i class="fas fa-list-ul"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click="commands.ordered_list"
              >
                <i class="fas fa-list-ol"></i>
              </button>

              <!-- <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
              >
                <i class="fas fa-quote-right"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                :class="{ 'is-active': isActive.code_block() }"
                @click="commands.code_block"
              >
                <i class="fas fa-code"></i>
              </button>-->
              <!-- 
              <button
                type="button"
                class="btn btn-dark btn-sm"
                @click="commands.horizontal_rule"
              >
                <i class="fas fa-minus"></i>
              </button>-->

              <button
                type="button"
                class="btn btn-dark btn-sm"
                @click="commands.undo"
              >
                <i class="fas fa-undo"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark btn-sm"
                @click="commands.redo"
              >
                <i class="fas fa-redo"></i>
              </button>

              <div class="ml-3" style="height: 30px" v-if="linkMenuIsActive">
                <form @submit.prevent="setLinkUrl(commands.link, linkUrl)">
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        v-model="linkUrl"
                        type="text"
                        class="form-control-sm"
                        placeholder="http://"
                      />
                      <div class="btn-group">
                        <button
                          class="btn btn-sm btn-dark"
                          type="button"
                          id="button-addon2"
                          @click="setLinkUrl(commands.link, linkUrl)"
                        >
                          <i class="fas fa-check"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-dark"
                          type="button"
                          id="button-addon2"
                          @click="setLinkUrl(commands.link, null)"
                        >
                          <i class="far fa-times-circle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </editor-menu-bar>
          <editor-content :editor="editor" />
        </div>
      </div>
      <div class="row d-flex justify-content-end">
        <button type="submit" class="btn btn-success mr-3 mb-5">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Swal from "sweetalert2";
import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";

export default {
  name: "sectionform",
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History()
      ],
      content: "<p>Type here...</p>",
      onUpdate: ({ getHTML }) => {
        this.html = getHTML();
      }
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  props: [],
  data() {
    return {
      newSectShow: false,
      linkMenuIsActive: false,
      linkUrl: null,
      editor: null,
      html: "",
      newSect: {
        charId: this.$store.state.activeCharacter._id
      }
    };
  },
  computed: {
    activeCharacter() {
      return this.$store.state.activeCharacter;
    }
  },
  methods: {
    newSection() {
      this.newSect.body = this.html;
      // console.log(this.newSect);
      this.$store.dispatch("newSect", this.newSect);
      this.$store.dispatch("getSections");
      this.newSect = {
        charId: this.$store.state.activeCharacter._id
      };
      Swal.fire({
        title: "Success!",
        text: "New section created! Refresh the page to view.",
        icon: "success",
        confirmButtonText: "Ok"
      });
    },
    setToTrue() {
      console.log(this.linkMenuIsActive);
      this.linkMenuIsActive = !this.linkMenuIsActive;
    },
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
    }
  },
  components: {
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble,
    Swal
  }
};
</script>

<style>
.ProseMirror {
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding-top: 5px;
  padding-left: 10px;
  margin-top: 10px;
}
</style>
