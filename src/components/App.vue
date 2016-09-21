
<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-md-offset-4" style="text-align: center;">
          <div id="appreciation-dropdown" class="dropdown open">
            <button class="btn btn-default btn-circle fa fa-star dropdown-toggle"
                    type="button" id="dropdownMenu1"
                    aria-haspopup="true" aria-expanded="true">
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <button class="fa fa-pencil editButton" v-if="!show" @click="show=!show"></button>
                <button class="fa fa-times closeEditButton" v-if="show" @click="show=!show"></button>
                <div v-if="show" transition="fade">
                  <multiselect-user></multiselect-user>
                  <appreciation-editor></appreciation-editor>
                </div>
                <appreciation-data></appreciation-data>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppreciationData from './AppreciationData.vue';
import MultiselectUser from './MultiselectUser.vue';
import AppreciationEditor from './AppreciationEditor.vue';


export default {

  name:"ParentComponent",

  created: function () {

  },
  mounted: function () {
    $("#dropdownMenu1").on('click', function (event) {
      $(this).parent().toggleClass('open');
    });

  },
  data () {
    return {
      msg: 'Yo dookie pick up the phone!',
      show: false,
      fade:'fade'
    }
  },

  components: {
      AppreciationData,
      MultiselectUser,
      AppreciationEditor
    }
}



</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.btn-circle{
    border-radius: 15px;
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    color:yellow
}

.dropdown-menu{
  width:500px;
}
.editButton{
  position: absolute;
  right: -10px;
  top: -10px;
  background: #7287ec;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  outline: none;
}

.closeEditButton{
  position: absolute;
  right: -10px;
  top: -10px;
  background: #E91E63;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  outline: none;
}
/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
