



/*
Each turn, we'll gather our move and shoot data.

Main Gameplay Loop:
    Then, we'll change locations of all ships and shots by x and y amounts.
    Then, we'll take a snapshot of the new locations, and look for collisions.
    Then, we'll resolve any collisions.
        we'll damage all struck ships
        we'll damage all struck shots.
        we'll destroy all dead ships and dead shots.
        we'll remove all dead target locations.

Then, we'll loop through Main GamePlay, until all remaining valid locations are reached.

Then, we'll see if all but one player is out of ships.a
    If so, we declare winner on Game Over page.
    If all players are out, we declare a Draw on Game Over page.

If game is not over, we start our next turn.


*/


// Write tests for all below:


// hit function ( shot reaches ship, or ship collision).collision
const hit = (loc1, loc2) => {
    if (loc1.x - loc2.x === 0 && loc1.y - loc2.y === 0) {
        return true;
    } return false;
}

// hpChange function ( change the hp that's given by the given increment/decrement)
const hpChange = (shipHp, change) => {
    return shipHp - change;
}

// move function ( change given position by x amount).

// plotCourse function ( head toward given target, until either arrival or destruction).


// pause function (toggle our Main Gameplay Loop).

// playerisOut function ( see if a player is out of ships)



module.exports = {
    hpChange,
    hit
}
