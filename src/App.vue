<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark darkbg mb-3" style="color: white">
      <a class="navbar-brand pointer" @click="goHome">
        <img
          src="@/assets/HelenaOordeel.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />
        Paradise Wiki
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item pointer">
            <a class="nav-link" @click="goHome">Home</a>
          </li>
          <li class="nav-item pointer">
            <a class="nav-link" @click="goCharacters">Characters</a>
          </li>
          <li class="nav-item pointer">
            <a class="nav-link" @click="goGods">Gods</a>
          </li>
          <li class="nav-item pointer">
            <a class="nav-link" @click="goSocieties">Societies</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
    <nav class="footer navbar-dark darkbg d-flex justify-content-center align-items-end">
      <small>
        Site Created by
        <a href="https://clairrogers.github.io/">Clair Rogers</a>
      </small>
    </nav>
  </div>
</template>

<script>
import router from "./router";

export default {
  name: "App",
  mounted() {},
  data() {
    return {};
  },
  methods: {
    goHome() {
      router.push({ name: "home" });
    },
    goCharacters() {
      router.push({ name: "characters" });
    },
    goGods() {
      router.push({ name: "gods" });
    },
    goSocieties() {
      router.push({ name: "societies" });
    }
  },
  components: {},
  computed: {}
};
</script>

<style>
body {
  color: #c5c9d6;
  background-color: #292c33;
  min-height: 100vh;
  position: relative;
}

a {
  color: #5fc8cc;
}

a:hover {
  color: #56b6b9;
}

h2 {
  color: #7683a0;
}

h3 {
  font-size: 25px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
}

.darkbg {
  background-image: linear-gradient(#292c33, #1d2025);
}

.card {
  background-color: #1d2025;
}

.pointer {
  cursor: pointer;
}

.modal-content {
  color: black;
}

.progress {
  background-color: #1d2025;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>