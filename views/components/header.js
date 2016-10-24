define(function(require) {
    
    var Header = { 
        template: require('./header.tpl'),
        data: function () {
            return {
                title: 'seajs'
            }
        }
    };

    return Header;

});