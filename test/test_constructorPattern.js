var Pokemon = require('../Constructor_Pattern/index');
var expect = require('chai').expect;

describe('#Pokemon()', function(){
    
    context('with no valid type', function(){
        it('should return your pokemon cannot attack', function(){
            expect(Pokemon('pokemon', 'not-valid-type').attack()).to.equal('pokemon cannot attack!')
        })
    })

    context('with valid type', function(){
        it('should return a pokemon attacking', function(){
            expect(Pokemon('charmeleon', 'fire').attack()).to.equal('charmeleon used ember!')
        })
    })
})