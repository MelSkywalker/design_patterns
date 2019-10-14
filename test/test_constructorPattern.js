var Pokemon = require('../Constructor_Pattern/index');
var expect = require('chai').expect;

describe('#Pokemon()', function(){
    
    context('with no valid type', function(){
        it('should return your pokemon cannot attack', function(){
            const unknown = new Pokemon("pokemon", "notype");
            expect(unknown.attack()).to.equal('pokemon cannot attack!')
        })
    })

    context('with valid type', function(){
        it('should return a pokemon attacking', function(){
            const charmeleon = new Pokemon("charmeleon", "fire");
            expect(charmeleon.attack()).to.equal('charmeleon used ember!')
        })
    })
})