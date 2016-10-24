define(function(require) {
    
    var Home = { 
        template: require('./home.tpl'),
        data: function () {
            return {
                msg: 'Home'
            }
        }
    };

    return Home;

});