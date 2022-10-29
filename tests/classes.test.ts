import { expect } from "chai";

import { Player, Projectile, Ship } from "../src/classes";

// CLASS TESTS
// basic projectile class (hp / move)

describe("Testing the projectile class (HP)", () => {
    let proj1 = new Projectile([5, 10], 5)

    it('1. hp should be reduced from positive change values', function(done) {
        proj1.changeHp(3)
        expect(proj1.hp).to.equal(2);
        done();
    });

    it('2. hp should be increased from negate change values', function(done) {
        proj1.changeHp(-1)
        expect(proj1.hp).to.equal(3);
        done();
    });

    it('3. hp should go below 0 if change is > hp', function(done) {
        proj1.changeHp(4)
        expect(proj1.hp).to.equal(-1);
        done();
    });

})

describe("Testing the projectile class (Move)", () => {
    let proj2 = new Projectile([0,0], 5);
    it('1. coordinates should change to [1,1].', (done)=> {
        proj2.move([1,1]);
        expect(proj2.coordinates[0]).to.equal(1);
        expect(proj2.coordinates[1]).to.equal(1);
        done();
    });

    it('2. coordinates should change to [1,5].', (done) => {
        proj2.move([1, 5]);
        expect(proj2.coordinates[0]).to.equal(1);
        expect(proj2.coordinates[1]).to.equal(5);
        done();
    });

    it('3. coordinates should change to [-2,25].', (done) => {
        proj2.move([-2, 25]);
        expect(proj2.coordinates[0]).to.equal(-2);
        expect(proj2.coordinates[1]).to.equal(25);
        done();
    });
})


// Ship class

describe("Testing the Ship class", () => {
    let ship1 = new Ship('blue', [3,3], 5);

    it('1. color should be blue', (done) => {
        expect(ship1.color).to.equal('blue');
        done();
    } );

    it('2. should have a range of 5', (done) => {
        expect(ship1.range).to.equal(5);
        done();
    })

    it('3. should have coordinates [3,3]', (done)=>{
        expect(ship1.coordinates).to.deep.equal([3,3]);
        done();
    })

    it('4.  should change coordinates to [1,1].', (done) => {
        ship1.move([1, 1]);
        expect(ship1.coordinates).to.deep.equal([1,1]);
        done();
    });

    it('5. Should move like a projectile', (done) => {
        let proj = new Projectile([3, 3], 5)
        proj.move([1,1]);
        expect(proj.coordinates).to.deep.equal(ship1.coordinates);
        done();
    });
});


describe('Player testing', () => {
    let ship1 = new Ship('blue', [3,3], 5);

    let ship2 = new Ship('blue', [4,4], 5);

    let ship3 = new Ship('blue', [3,6], 2, 7);

    let ships = [ship1, ship2, ship3]

    const player1 = new Player(ships, "blue");

    const player2 = new Player([], "red");

    it('1. Expect player1.ships to have ships.', (done) => {
        expect(player1.ships.length).greaterThan(0);
        done();
    });

    it('2. Expect player2.ships to not have ships.', (done) => {
        expect(player2.ships.length).to.equal(0);
        done();
    });

    it('3. Expect player1.ships[0] to equal ship1.', (done) => {
        expect(player1.ships[0]).to.deep.equal(ship1);
        done();
    });

})


export {}