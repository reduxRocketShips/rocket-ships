const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");

describe ('Item', function () {

  it('should have name and description attributes', function () {
    let item = new Item("rock", "just a simple rock");

    expect(item.name).to.equal("rock");
    expect(item.description).to.equal("just a simple rock");

  });

  it('can be retrieved from player inventory by name', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);
    expect(player.items.length).to.equal(1);

    expect(player.getItemByName("rock")).to.equal(item);

  });

  it('can be retrieved from a room by name', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");

    room.items.push(item);
    expect(room.items.length).to.equal(1);

    expect(room.getItemByName("rock")).to.equal(item);

  });

  it('can be picked up from a room by a player', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    room.items.push(item);
    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    player.takeItem("rock");

    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    expect(player.getItemByName("rock")).to.equal(item);

  });


  it('can be dropped into a room by a player', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);
    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    player.dropItem("rock");

    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    expect(room.getItemByName("rock")).to.equal(item);

  });


});


describe ('Food', function () {


  it('should have name and description attributes', function () {
    let food = new Food("sandwich", "a delicious sandwich");

    expect(food.name).to.equal("sandwich");
    expect(food.description).to.equal("a delicious sandwich");

  });


  it('should be an instance of Item and Food', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let item = new Item("rock", "just a simple rock");

    expect(food instanceof Item).to.be.true;
    expect(food instanceof Food).to.be.true;

    expect(item instanceof Item).to.be.true;
    expect(item instanceof Food).to.be.false;
  });


  it('can be eaten by a player', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(food);

    expect(player.items.length).to.equal(1);

    player.eatItem("sandwich");

    expect(player.items.length).to.equal(0);

  });


  it('cannot be eaten by a player if not food', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);

    expect(player.items.length).to.equal(1);

    player.eatItem("rock");

    expect(player.items.length).to.equal(1);
  });
});



// SECOND FILE

const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");

const {World} = require("../class/world.js");

const {Character} = require("../class/character.js");
const {Enemy} = require("../class/enemy.js");

describe ('Character', function () {

  let character;
  let room;
  let item;

  beforeEach(function() {
    room =  new Room("Test Room", "A test room");
    item = new Item("rock", "just a simple rock");
    character = new Character('Character', 'an ordinary character', room);
    character.items.push(item);
  });

  it('should have name and description attributes', function () {
    expect(character.name).to.equal("Character");
    expect(character.description).to.equal('an ordinary character');
  });

  it('should not be an instance of Enemy or Player', function () {
    expect(character instanceof Player).to.be.false;
    expect(character instanceof Enemy).to.be.false;
  });

  it('should have strength and health attributes', function () {
    expect(character.health).to.equal(100);
    expect(character.strength).to.equal(10);
  });

  it('should lose health when damage is applied', function () {
    expect(character.health).to.equal(100);
    character.applyDamage(10);
    expect(character.health).to.equal(90);
  });

  it('should drop all held items and have currentRoom set to null when dead', function () {
    expect(character.currentRoom).to.equal(room);
    expect(room.items.length).to.equal(0);
    character.die();
    expect(character.currentRoom).to.equal(null);
    expect(room.items.length).to.equal(1);
    expect(room.items[0]).to.equal(item);
  });

  it('should die when damage brings health to 0 or less', function () {
    expect(character.currentRoom).to.equal(room);
    expect(room.items.length).to.equal(0);

    expect(character.health).to.equal(100);
    character.applyDamage(100);
    expect(character.health).to.equal(0);

    expect(character.currentRoom).to.equal(null);
    expect(room.items.length).to.equal(1);
    expect(room.items[0]).to.equal(item);
  });

});

describe ('Enemy', function () {

  let player;
  let enemy;
  let room;
  let item;

  beforeEach(function() {
    room =  new Room("Test Room", "A test room");
    item = new Item("rock", "just a simple rock");
    character = new Character('Character', 'an ordinary character', room);
    character.items.push(item);
  });

  it('should have name and description attributes', function () {
    expect(character.name).to.equal("Character");
    expect(character.description).to.equal('an ordinary character');
  });

  it('should not be an instance of Enemy or Player', function () {
    expect(character instanceof Player).to.be.false;
    expect(character instanceof Enemy).to.be.false;
  });

  it('should have strength and health attributes', function () {
    expect(character.health).to.equal(100);
    expect(character.strength).to.equal(10);
  });

  it('should lose health when damage is applied', function () {
    expect(character.health).to.equal(100);
    character.applyDamage(10);
    expect(character.health).to.equal(90);
  });

  it('should drop all held items and have currentRoom set to null when dead', function () {
    expect(character.currentRoom).to.equal(room);
    expect(room.items.length).to.equal(0);
    character.die();
    expect(character.currentRoom).to.equal(null);
    expect(room.items.length).to.equal(1);
    expect(room.items[0]).to.equal(item);
  });

  it('should die when damage brings health to 0 or less', function () {
    expect(character.currentRoom).to.equal(room);
    expect(room.items.length).to.equal(0);

    expect(character.health).to.equal(100);
    character.applyDamage(100);
    expect(character.health).to.equal(0);

    expect(character.currentRoom).to.equal(null);
    expect(room.items.length).to.equal(1);
    expect(room.items[0]).to.equal(item);
  });

});


describe ('Enemy', function () {

  let enemy;
  let room;
  let item;
  let sandwich;
  let player;

  beforeEach(function() {
    room = new Room("Test Room", "A test room");
    item = new Item("rock", "just a simple rock");
    sandwich = new Food("sandwich", "a delicious looking sandwich");
    enemy = new Enemy('enemy', 'an ordinary character', room);
    player = new Player("player", room);

    World.enemies.push(enemy);
    World.setPlayer(player);

    enemy.items.push(item);
    room.items.push(sandwich);
  });


  it('should inherit from Character class', function () {
    expect(enemy instanceof Character).to.be.true;
    expect(enemy instanceof Enemy).to.be.true;
    expect(enemy instanceof Player).to.be.false;
  });


  it('should have a cooldown attribute that defaults to 3000ms', function () {
    expect(enemy.cooldown).to.equal(3000);
  });


  it('should be able to move to a new room', function () {

    let westRoom = new Room("West Room", "A room to the west of testRoom");
    room.connectRooms('w', westRoom);

    enemy.cooldown = 0;

    expect(enemy.currentRoom).to.equal(room);

    enemy.randomMove();

    expect(enemy.currentRoom).to.equal(westRoom);
    expect(enemy.cooldown).above(0);
  });


  it('should target the player when hit', function () {

    expect(enemy.attackTarget).to.equal(null);

    player.hit('enemy');

    expect(enemy.attackTarget).to.equal(player);
  });


  it('should attack the player when targetting player', function () {

    player.hit('enemy');

    enemy.cooldown = 0;

    expect(player.health).to.equal(100);
    enemy.attack();
    expect(player.health).to.equal(90);
    expect(enemy.cooldown).above(0);

  });

});


// THIRD FILE
const { expect } = require('chai');

const Cursor = require("../class/cursor.js");
const Screen = require("../class/screen.js");

describe ('Cursor', function () {

  let cursor;

  beforeEach(function() {
    cursor = new Cursor(3, 3);
  });


  it('initializes for a 3x3 grid', function () {
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
  });

  it('correctly processes down inputs', function () {

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
  });

  it('correctly processes up inputs', function () {

    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });

  it('processes right inputs', function () {

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
  });

  it('processes left inputs', function () {

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });
});
