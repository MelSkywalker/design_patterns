var userModule = require('../Design_Patterns/modulePattern');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('#userModule()', function() {
    context('addUser()', function() {
        var addUserSpy = sinon.spy(userModule, 'addUser');
        userModule.addUser({
            name: 'someone',
            pass: 'somePass',
            allowed: false
        });
        
        it('should be called with an object', function() {
            sinon.assert.calledWith(addUserSpy, {
                name: 'someone',
                pass: 'somePass',
                allowed: false
            });
        })
    })

    context('countAllowedUsers()', function(){
        it('should return 0 allowed user', function() {
            expect(userModule.countAllowedUsers()).to.equal(0)
        })
    })
    
    context('allowUsers()', function() {
        it('should return 1 allowed users', function() {
            userModule.allowUser('someone');
            expect(userModule.countAllowedUsers()).to.equal(1)
        })
    })
})