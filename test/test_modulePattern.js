var userModule = require('../Design_Patterns/modulePattern');
var expect = require('chai').expect;

describe('#userModule()', function() {

    context('countAllowedUsers()', function(){
        userModule.addUser({
            name: "someone",
            pass: "somePass",
            allowed: false
        });
        userModule.addUser({
            name: "someone2",
            pass: "somePass2",
            allowed: true
        });
        it('should return 1 allowed user', function(){
            expect(userModule.countAllowedUsers()).to.equal(1)
        })
    })
})