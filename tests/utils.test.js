const assert = require('chai').assert;
const expect = require('chai').expect;

const utils = require('../src/utils/combat');

// FUNCTION TESTS
describe("Testing the hpChange function", function() {
    let shipHp = 5;

    it('1. ShipHp should be reduced from positive change values', function(done) {
        let change = 3;
        expect(utils.hpChange(shipHp, change)).to.equal(2);
        done();
    });

    it('2. ShipHp should be increased from negate change values', function(done) {
        let change = -3;
        expect(utils.hpChange(shipHp, change)).to.equal(8);
        done();
    });
});

describe("Testing the hit function", function() {
    let loc1 = {x: 6, y: 3}
    let loc2 = {x: 23, y: 23}
    let loc3 = {x: 6, y: 23}

    it('1. Far away items should not interact', function(done) {
            expect(utils.hit(loc1, loc2)).to.equal(false);
            done();
    });

    it('2. Same x values but different y values should not interact', function(done) {
        expect(utils.hit(loc1, loc3)).to.equal(false);
        done();
    });

    it('3. Identical values should interact', function(done) {
        expect(utils.hit(loc1, loc1)).to.equal(true);
        done();
    });
});

describe("Testing the move function", function() {
    let origin = {x: 10, y: 22}
    let target = {x:20, y: 25}

    it('1. Location should be equal to target', function(done) {
        expect(utils.move(origin, target)).to.equal(target);
        done();
    });
});
