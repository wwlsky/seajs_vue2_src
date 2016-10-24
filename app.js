define(function(require, exports, module) {

    var Vue = require('Vue');
    var VueRouter = require('VueRouter');
    var VueResourc = require('VueResourc');

    Vue.use(VueRouter);
    Vue.use(VueResourc);

    var Home = require('./views/home');
    var Login = require('./views/login');

    var router = new VueRouter({
        routes: [
            { path: '/', component: Home },
            { path: '/login', component: Login }
        ]
    });

    new Vue({
        router
    }).$mount('#app');
    
});