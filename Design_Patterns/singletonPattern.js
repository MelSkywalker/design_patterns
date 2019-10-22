var mySingleton = (function() {
    var instance;
    function init() {
        function privateMethod() {
            
        }
        return
    }
    return {
        getInstance: function() {
            if( !instance ) {
                instance = init();
            }
            return instance;
        }
    }
})();

module.exports = mySingleton;