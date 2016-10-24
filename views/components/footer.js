define(function(require) {
    
    var Footer = { 
        template: require('./footer.tpl'),
        data: function () {
            return {
                info: 'Seajs3.0 + Vue2.0 by 梵天 502832965@qq.com'
            }
        }
    };

    return Footer;

});