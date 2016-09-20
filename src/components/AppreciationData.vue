<template>
    <div id="appreciation-contents" class="appreciation-data">
      <ul class="list-group">
        <li class="list-group-item appreciationBox" v-for="appreciation in appreciations">
          <div>
            <span id="appreciation-text" v-html="appreciation.text"></span><br>
            <div>
              <span id="appreciation-author" class="label label-success user-margin">By: {{ appreciation.author }}</span>
            </div>
            <div id="appreciation-tagged-users">
              <span class="label label-warning user-margin" v-for="user in appreciation.usersTagged">{{user.name}} </span>
            </div>
            <div id="appreciation-reaction" class="appreciation-reaction">
              Heart
              <span class="badge heart" @click="appreciation.reactions.heart++;editAppreciation(appreciation)">
                {{appreciation.reactions.heart}}
              </span>
              Plus
              <span class="badge plus" @click="appreciation.reactions.heavy_plus_sign++;editAppreciation(appreciation)">
                {{appreciation.reactions.heavy_plus_sign}}
              </span>
              Thumbs-Up
              <span class="badge thumbsup" @click="appreciation.reactions.thumbsup++;editAppreciation(appreciation)">
                {{appreciation.reactions.thumbsup}}
              </span>
            </div>
          </div>
        </li>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
      </ul>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
var api = require('./../api.js');

export default {
  components: {
    InfiniteLoading
  },
  //function called after the component is created.
  created: function () {

    api.getAppreciations.get({offset: this.offset,limit:this.limit}).then((response) => {
      this.appreciations = response.body.appreciations;
    }, (response) => {
        // Log error
    });

    this.$bus.$on('save-new-appreciation', function(newAppreciation){
      newAppreciation.author = "Dr.Doom"; //will need to set the author
      api.saveNewAppreciation.save(newAppreciation).then((response) => {
        //success callback
        //since I can't get the response back right now, we will
        //add the reactions object to the appreciation Object
        if(response.status==200){
          console.log("response: ",response);
          newAppreciation.reactions = {"thumbsup": 0,"heart":0,"heavy_plus_sign":0}
          this.appreciations.unshift(newAppreciation);
        }
      }, (response) => {
          // Log error
      });
    }.bind(this));

   },
   methods: {
      onInfinite() {

        // This is what the actual call would look like
        // this.offset += this.limit;
        //
        // api.getAppreciations.get({offset: this.offset,limit:this.limit}).then((response) => {
        //   this.appreciations.push(response.body.appreciations);
        //   this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        // }, (response) => {
        //     // Log error
        // });

        // for mocking the API call
        setTimeout(() => {
         this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        }, 2000);

      },

      editAppreciation(appreciation){
        //alert(JSON.stringify(appreciation));
        // api.editAppreciation.update(appreciation).then((response) => {
        //     // Log success
        // }, (response) => {
        //     // Log error
        // });
      }
  },
  data () {
    return {
      appreciations:null,
      offset:0,
      limit:10
    }
  }
}

</script>

<style>


.user-margin{
  margin:5px;
}

.label-success{
  background-color:#2196F3;
}

.label-warning{
  background-color:#8BC34A;
}

.appreciation-reaction{
  margin-top:20px;
}

.appreciationBox{
  position: relative;
  width: 480px;
  margin: 15px auto;
  background: #fff;
  padding: 15px;
  border-radius: 2px;
  box-shadow: 0 1px 5px #ccc;
}

.appreciation-data{
  height: 300px;
  overflow-y: auto;
  margin-top:25px;
}
</style>
