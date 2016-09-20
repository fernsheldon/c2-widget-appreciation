<template>
  <div class="multiSelectBox">
    <multiselect
    :options="users"
    :selected="usersTagged"
    :multiple="true"
    :searchable="true"
    :close-on-select="false"
    :clear-on-select="false"
    @update="updateUsersTagged"
    placeholder="Pick the people to appreciate"
    label="name"
    track-by="name">
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'


export default {

  components: {
    Multiselect
  },

  created: function () {

    this.$http.get('http://private-cf607-curiosity2.apiary-mock.com/users').then((response) => {
      this.users = response.body.users;
    },(response) => {
        // Log error
    });

    this.$bus.$on('add-users-for-new-appreciation', function(newAppreciation){
      if(this.usersTagged){
        newAppreciation.usersTagged = this.usersTagged;
        this.$bus.$emit('save-new-appreciation', newAppreciation)
      }
      this.usersTagged = [];
    }.bind(this));

  },

  data () {
    return {
      usersTagged: null,
      users: []
    }
  },

  methods: {
    updateUsersTagged (newSelected) {
      this.usersTagged = newSelected
    }
  }
}

</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.multiSelectBox{
    position: relative;
    width: 480px;
    margin: 15px auto;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1px 5px #ccc;
  }
</style>
