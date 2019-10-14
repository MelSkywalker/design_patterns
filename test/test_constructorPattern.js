var Pokemon = require('../Design_Patterns/constructorPattern');
var expect = require('chai').expect;

describe('#Pokemon()', function(){
    
    context('with no valid type', function() {
        it('should return your pokemon cannot attack', function(){
            const unknown = new Pokemon("unknown", "notype");
            expect(unknown.attack()).to.equal('unknown cannot attack!')
        })
    })

    context('with valid type', function(){
        it('should return a pokemon attacking', function(){
            const charmeleon = new Pokemon("charmeleon", "fire");
            expect(charmeleon.attack()).to.equal('charmeleon used ember!')
        })
    })
})