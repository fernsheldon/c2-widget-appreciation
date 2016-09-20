<template>
  <div id="appreciation-editor" class="appreciationBox">
      <trix-editor input="x"></trix-editor>
      <button type="submit" class="addButton" @click="createAppreciation">+</button>
    </div>
</template>
<script>

export default {

  data () {
    return {
      content: ''
    }
  },
  methods: {
    createAppreciation () {
      var element = $("trix-editor")[0];
      var newAppreciation = {
            "text": element.innerHTML,
            "author": "",
            "usersTagged": []
        }
      this.$bus.$emit('add-users-for-new-appreciation', newAppreciation)
      element.editor.setSelectedRange([0, element.editor.getDocument().getLength()]);
      element.editor.deleteInDirection("backward");
    }
  }
}

</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.appreciationBox{
  position: relative;
  width: 480px;
  margin: 15px auto;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 1px 5px #ccc;
  margin-left:10px;
  margin-right: 10px;
}

  .addButton{
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #41b883;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    outline: none;
  }
</style>
