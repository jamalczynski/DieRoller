/* Die Roller Thing
*  Prompt:
*     -Number of sides
*     -Number of rolls
*     -Total of rolls
*     -Individual rolls
*     */

/**
 * @author Malczynski, Jarod (jarodmalczynski@gmail.com)
 * @version 0.0.1
 * @summary coding assignment six (Die Roller)
 */

"use strict";
const PROMPT = require ('readline-sync');

let continueResponse;
let sides, rolls;

/**
 * @method main
 * @description runs code
 * @returns {null}
 */
function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        askSides();
        askRolls();
        calculations();
        setContinueResponse();
    }
    goodbye();
}

main();

/**
 * @method main
 * @description continues response
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @description prompts number of sided die
 * @returns {null}
 */
function askSides() {
    sides = Number(PROMPT.question(`\nEnter the number of side you wish your die to have: `));
}

/**
 * @method
 * @description prompts number of rolls
 * @returns {null}
 */
function askRolls() {
    rolls = Number(PROMPT.question(`\nEnter the number of times you wish to roll the die: `));
}

/**
 * @method
 * @description calculates
 * @returns {null}
 */
function calculations() {
    Math.floor((Math.random() * sides) + 1);
    for (rolls > 0) {

    }
    else {
        console.log();
    }
}

/**
 * @method
 * @description prints goodbye
 * @returns {null}
 */
function goodbye() {
    console.log(`\nThank you for using our Die Roller, have a nice day.`);
}