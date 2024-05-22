<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="">Navbar</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Work</a>
          <a class="nav-link active" aria-current="page" href="#">Tools</a>
          <a class="nav-link active" aria-current="page" href="#">Gallery</a>
        </div>
      </div>
    </div>
  </nav>
  <!-- banner -->
  <v-parallax>
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="12">
          <v-img
            class="bg-grey-lighten-2"
            height="500"
            src="https://picsum.photos/1200/500"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-parallax>
  <!-- work -->
  <div class="hight">dssd</div>
</template>

<script>
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default {
  name: 'PortAll',
  components: {
    components,
    directives
  }
}
</script>
<style>
@import 'vuetify/styles';
.hight {
  height: 2000px;
}
</style>
