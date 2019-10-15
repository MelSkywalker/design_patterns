var mySingleton = (function() {
    var instance;
    function init() {
        function privateMethod() {
            
        }
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