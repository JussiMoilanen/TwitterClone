<template>
  <v-container>
    <v-flex>
      <v-text-field label="Search by user" v-model="search" single-line outline max-width="500"></v-text-field>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search() {
      const route = {
        name: ""
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style scoped>
</style>