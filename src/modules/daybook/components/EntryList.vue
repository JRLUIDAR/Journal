<template>
  <div class="entry-list-container">
    <div class="px-2 py-2">
      <input
        type="text"
        placeholder="Buscar Entradas"
        class="form-control"
        v-model="search"
      />
    </div>

    <div class="entry-scroll-area">
      <Entry v-for="entrada in entriesByTerm" :key="entrada.id" :entrada='entrada' />
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {

  data() {
    return {
      search:"",
    };
  },

  components: {
    Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
  },

  computed: {
    ...mapGetters("dayBookStore", ["getEntriesByTerms"]),

    entriesByTerm() {
      return this.getEntriesByTerms(this.search);
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid gray;
  height: 100%;
}

.entry-scroll-area {
  height: calc(100vh - 95px);
  overflow: scroll;
}
</style>
