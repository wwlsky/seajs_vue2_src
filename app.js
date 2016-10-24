define(function(require, exports, module) {

    var Vue = require('Vue');
    var VueRouter = require('VueRouter');
    var VueResourc = require('VueResourc');

    Vue.use(VueRouter);
    Vue.use(VueResourc);

    // 路由Pages
    var pageHome = require('./views/home');
    var pageLogin = require('./views/login');

    // 配置路由
    var router = new VueRouter({
        routes: [
            { path: '/', component: pageHome },
            { path: '/login', component: pageLogin }
        ]
    });

    // 初始化Vue
    new Vue({
        router,
        components: {
            'vHeader': require('./views/components/header'),
            'vFooter': require('./views/components/footer'),
        }
    }).$mount('#app');
    
});