<template>
  <div class="container">
    <h1>Items</h1>
    <hr />
    <div class="create-item">
      <label for="create-item">Create new item</label>
      <br />
      <input type="text" id="create-item" placeholder="add..." v-model="text" />
      <button v-on:click="createItem">Add new item</button>
    </div>

    <p class="error" v-if="error">{{error}}</p>

    <div class="item-container" v-for="(item) in items" v-bind:item="item" v-bind:key="item._id">
      <p class="text">{{item.item}}</p>
      <button @click="deleteItem(item._id)">delete</button>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      items: [],
      error: "",
      item: "",
      percentCompleted: 0
    };
  },
  async created() {
    try {
      this.items = await PostService.getItems();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createItem() {
      await PostService.insertItem(this.text);
      this.items = await PostService.getItems();
    },
    async deleteItem(id) {
      await PostService.deleteItem(id);
      this.items = await PostService.getItems();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
