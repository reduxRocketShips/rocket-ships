import { expect } from "chai";

import { Player, Projectile, Ship } from "../src/classes";

// Player needs to manage ships
    // Add method
    // Delete method

// Projectiles need to delete themselves after they pass the boundary

// Ship holds projectiles
        // Shoot method

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

    it('4. Should be marked living and display HP if HP > 0', function(done) {
        expect(proj1.status).to.equal("Living (3HP)");
        done();
    });

    it('3. hp should go below 0 if change is > hp', function(done) {
        proj1.changeHp(4)
        expect(proj1.hp).to.equal(-1);
        done();
    });

    it('4. Should be marked dead if HP <= 0', function(done) {
        expect(proj1.status).to.equal("Dead");
        done();
    });

})

describe("Testing the projectile class movement", () => {
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

    it('4. target should be set to [50, 50]', (done) => {
        proj2.setTarget([50, 50]);
        expect(proj2.target).to.equal([50, 50]);
        done();
    });

    it('5. should have a slope of 0.5', (done) => {
        const SLOPE = (50-25)/(50- -2);
        expect(proj2.slope).to.equal(SLOPE);
    })


})

// Ship class

describe("Testing the Ship class", () => {
    let ship1 = new Ship('blue', [3,3], 5, 5);

    it('1. Color should be blue', (done) => {
        expect(ship1.color).to.equal('blue');
        done();
    } );

    it('2. Should have a range of 5', (done) => {
        expect(ship1.range).to.equal(5);
        done();
    })

    it('3. Should have coordinates [3,3]', (done)=>{
        expect(ship1.coordinates).to.deep.equal([3,3]);
        done();
    })

    it('4. Should change coordinates to [1,1].', (done) => {
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

    it('6. Shooting will create a new projectile instance', (done) => {
        // this will add a shot to ship.shots
        ship1.shoot();

        // this is the specific shot that was just created.
        let shot = ship1.shots[0];
        // we want our ship to store its shots in an array. ( aside: this would allow multi shot features down the road).
        //so, rather than check the variable we created, let's check the ship's shots array.
        expect(shot).to.be.an.instanceOf(Projectile);
        done();
    });

    it('7. Shot should move out of bounds', (done) => {
        let shot = ship1.shots[0];
        shot.move([110,110]);
        expect(shot.outOfBounds).to.equal(true);
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

    it('4. Should show that player is out when their ship array is empty', (done) => {
        expect(player2.canContinue).to.equal(true);
        done();
    });

    it('5. Should not show that player is out when their ship array is not empty', (done) => {
        expect(player1.canContinue).to.equal(false);
        done();
    });

    // have ship create 

    it ('6. Once projectile reaches out of bounds, it will be deleted', (done) => {
        // this method deletes all shots/debris that are out of bounds
        player1.eliminateOutliers();
        expect(ship1.shots.length).to.equal(0);
        done();
    })
})


export {}
