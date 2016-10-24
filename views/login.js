define(function(require) {
    
    var Login = { 
        template: require('./login.tpl'),
        data: function () {
            return {
                msg: 'Login'
            }
        },
        methods: {
            go: function () {
                alert('go!!!');
            }
        }
    };

    return Login;

});