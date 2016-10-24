seajs.config({
    base: './modules/',
    alias: {
        'loader': 'seajs/seajs-text',
        'Vue': 'vuejs/vue',
        'VueRouter': 'vuejs/vue-router',
        'VueResourc': 'vuejs/vue-resource'
    }
});

// 加载入口模块
seajs.use(['loader', './app']);