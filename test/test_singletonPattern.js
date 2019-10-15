var mySingleton = require('../Design_Patterns/singletonPattern');
var expect = require('chai').expect;

describe('#mySingleton()', function() {
    var instance1 = mySingleton.getInstance();
    var instance2 = mySingleton.getInstance();
    context('instance 1 and instance 2', function() {
        it('should be exactly the same', function() {
            expect(instance1 === instance2).to.equal(true);
        })
    })
})