var Vue = require('vue');
Vue.use(require('vue-resource'));

exports.getAppreciations = Vue.resource('http://private-93843-appreciations.apiary-mock.com/api/v1/appreciations/?offset={offset}&limit={limit}');

exports.saveNewAppreciation = Vue.resource('http://private-93843-appreciations.apiary-mock.com/api/v1/appreciations/');

exports.editAppreciation = Vue.resource('http://private-93843-appreciations.apiary-mock.com/api/v1/appreciation/{appreciationId}');
