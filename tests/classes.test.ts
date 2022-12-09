import { expect } from "chai";

import { Player, Projectile, Ship } from "../src/classes";

// Projectile class
// Projectiles have hp
// Projectiles have coordinates
// get Slope method
// get outOFBounds method
describe("Testing the projectile class (HP)", () => {
  let proj1 = new Projectile(133, 323, 5);

  it("1. hp should be reduced from positive change values", function (done) {
    proj1.changeHp(3);
    expect(proj1.hp).to.equal(2);
    done();
  });

  it("2. hp should be increased from negate change values", function (done) {
    proj1.changeHp(-1);
    expect(proj1.hp).to.equal(3);
    done();
  });

  it("3. Should be marked living and display HP if HP > 0", function (done) {
    expect(proj1.status).to.equal("Living (3HP)");
    done();
  });

  it("4. hp should go below 0 if change is > hp", function (done) {
    proj1.changeHp(4);
    expect(proj1.hp).to.equal(-1);
    done();
  });

  it("5. Should be marked dead if HP <= 0", function (done) {
    expect(proj1.status).to.equal("Dead");
    done();
  });
});

// TODO: Need to rethink how to test this with vectors

// describe("Testing the projectile class movement", () => {
//     let proj2 = new Projectile(0, 0, 5);
//     it('1. coordinates should change to [1,1].', (done)=> {
//         proj2.move([1,1]);
//         expect(proj2.coordinates[0]).to.equal(1);
//         expect(proj2.coordinates[1]).to.equal(1);
//         done();
//     });

//     it('2. coordinates should change to [1,5].', (done) => {
//         proj2.move([1, 5]);
//         expect(proj2.coordinates[0]).to.equal(1);
//         expect(proj2.coordinates[1]).to.equal(5);
//         done();
//     });

//     it('3. coordinates should change to [-2,25].', (done) => {
//         proj2.move([-2, 25]);
//         expect(proj2.coordinates[0]).to.equal(-2);
//         expect(proj2.coordinates[1]).to.equal(25);
//         done();
//     });

//     it('4. target should be set to [50, 50]', (done) => {
//         proj2.setTarget([50, 50]);
//         expect(proj2.target).to.equal([50, 50]);
//         done();
//     });
// })

describe("Testing the Ship class", () => {
  let ship1 = new Ship("blue", 3, 3, 5);

  it("1. Color should be blue", (done) => {
    expect(ship1.color).to.equal("blue");
    done();
  });

  it("2. Should have a range of 5", (done) => {
    expect(ship1.range).to.equal(5);
    done();
  });

  it("3. Should have coordinates [3,3]", (done) => {
    expect([ship1.x, ship1.y]).to.deep.equal([3, 3]);
    done();
  });

  // THE MATH IS RIGHT OUR ASSUMTPTIONS ARE WRONG
  it("4. Should change coordinates to [4,4]", (done) => {
    // we need to create target, and create a vector, and compare our new coordinates after moving to the first waypoint created by the vector. (the first x+=vectorCoordinates.x, y += vectorCoordinates.y);
    const ship2 = new Ship("blue", 0, 0, 5);
    // ship1.vector(10, 10);

    // make sure both start and end create a line with slope of 1.

    expect(ship2.vector(1, 1)).to.equal("something");
    // expect(ship1.x).to.equal(4);
    // expect(ship1.y).to.equal(4);
    done();
  });

  it("5. Should move like a projectile", (done) => {
    let proj = new Projectile(3, 3, 5);
    proj.move();
    expect(proj.vectorCoordinates).to.deep.equal(ship1.vectorCoordinates);
    done();
  });

  it("6. Shooting will create a new projectile instance", (done) => {
    // this will add a shot to ship.shots
    ship1.shoot(8, 8);

    // this is the specific shot that was just created.
    let shot = ship1.shots[0];
    // we want our ship to store its shots in an array. ( aside: this would allow multi shot features down the road).
    //so, rather than check the variable we created, let's check the ship's shots array.
    expect(shot).to.be.an.instanceOf(Projectile);
    expect([shot.x, shot.y]).to.deep.equal([108, 108]);
    expect(shot.vectorCoordinates).to.equal(1);
    done();
  });

  it("7. Shot should move out of bounds", (done) => {
    let shot = ship1.shots[0];
    expect(shot.outOfBounds).to.equal(true);
    done();
  });

  it("8. Once shot is out of bounds, it should be marked for deletion", (done) => {
    ship1.shoot(8, 8);
    // this is the specific shot that was just created.
    let shot = ship1.shots[0];
    expect(shot.status).to.equal(true);
    done();
  });
  // let's make a new shot, and test collisions.3HP

  // once the new shot has 0 hp, the ship should delete it.
});

// Player needs to manage ships
// Add Ship method
// DeleteDeadShips method

describe("Player testing", () => {
  let ship1 = new Ship("blue", 3, 3, 5);
  let ship2 = new Ship("blue", 4, 4, 5);
  let ship3 = new Ship("blue", 3, 6, 2);

  let ships = [ship1, ship2, ship3];
  const player1 = new Player("blue", ships);
  const player2 = new Player("red");

  let ship4 = new Ship(player2.color, 25, 25, 5);
  let ship5 = new Ship(player2.color, 55, 55, 5);

  it("1. Expect player2.ships to not have ships.", (done) => {
    expect(player2.ships.length).to.equal(0);
    done();
  });

  it("2. Player2 should create a ship that matches ship4", (done) => {
    player2.createShip(player2.color, 25, 25, 5);
    expect(player2.ships[0]).to.deep.equal(ship4);
    done();
  });

  it("3. Player2 should create a ship that matches ship5", (done) => {
    // we can check to make sure ships are properly added to the ships array.
    player2.createShip(player2.color, 55, 55, 5);
    expect(player2.ships[0]).to.deep.equal(ship4);
    expect(player2.ships[1]).to.deep.equal(ship5);
    done();
  });

  it("4. Expect ships to be removable.", (done) => {
    // create the conditions that will leave all player2 ships dead.
    //so, let's set hp of all player2 ships to 0.
    // functional programming bans side effects and global variables.

    player2.ships.forEach((ship) => {
      ship.changeHp(5);
    });

    player2.removeDeadShips();
    expect(player2.ships.length).to.equal(0);
    done();
  });

  it("5. Expect player1.ships to have ships.", (done) => {
    expect(player1.ships.length).greaterThan(0);
    done();
  });

  it("6. Expect player1.ships[0] to equal ship1.", (done) => {
    expect(player1.ships[0]).to.deep.equal(ship1);
    done();
  });

  it("7. Should show that player is out when their ship array is empty", (done) => {
    expect(player2.canContinue).to.equal(false);
    done();
  });

  it("8. Should not show that player is out when their ship array is not empty", (done) => {
    expect(player1.canContinue).to.equal(true);
    done();
  });

  it("9. Player 1's ship1 should fire a shot out of bounds, then the shot should delete", (done) => {
    // our first ship is gonna make a shot.
    player1.ships[0].shoot(10, 10);
    player1.ships[0].shots[0].move();

    // this method deletes all shots/debris that are out of bounds
    // Why is this part of the player class?
    player1.eliminateOutliers();
    expect(player1.ships[0].shots.length).to.equal(0);
    done();
  });
});
