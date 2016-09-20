
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
                <multiselect-user></multiselect-user>
                <appreciation-editor></appreciation-editor>
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
</style>
