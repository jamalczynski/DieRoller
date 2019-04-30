/**
 * @author Malczynski, Jarod (jarodmalczynski@gmail.com)
 * @version 0.0.1
 * @summary die roller
 */

"use strict";
const PROMPT = require ('readline-sync');

let continueResponse;
let menu, rollz, total;

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
        setDieType();
        switch (menu) {
            case 1:
                askRolls();
                calc4();
                break;
            case 2:
                askRolls();
                calc6();
                break;
            case 3:
                askRolls();
                calc8();
                break;
            case 4:
                askRolls();
                calc10();
                break;
            case 5:
                askRolls();
                calc12();
                break;
            case 6:
                askRolls();
                calc20();
                break;
            case 7:
                askRolls();
                calc100();
                break;
        }
    }
}

main();

/**
 * @method
 * @description continues/ends program
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
 * @description select a die
 * @returns {null}
 */
function setDieType() {
    menu = -1;
    while (menu !== 1 && menu !== 2 && menu !== 3 && menu !== 4 && menu !== 5 && menu !== 6 && menu !== 7) {
        menu = Number(PROMPT.question(
            `\tSelect a die type to roll: 
           \t\t1) D4
           \t\t2) D6
           \t\t3) D8
           \t\t4) D10
           \t\t5) D12
           \t\t6) D20
           \t\t7) D100
           \t\tCHOOSE: `
        ));
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc4() {
    let D4;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D4 = Number(Math.floor((Math.random() * 4) + 1));
        console.log(`${D4}`);
        total += D4;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc6() {
    let D6;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D6 = Number(Math.floor((Math.random() * 6) + 1));
        console.log(`${D6}`);
        total += D6;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc8() {
    let D8;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D8 = Number(Math.floor((Math.random() * 8) + 1));
        console.log(`${D8}`);
        total += D8;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc10() {
    let D10;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D10 = Number(Math.floor((Math.random() * 10) + 1));
        console.log(`${D10}`);
        total += D10;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc12() {
    let D12;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D12 = Number(Math.floor((Math.random() * 12) + 1));
        console.log(`${D12}`);
        total += D12;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc20() {
    let D20;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D20 = Number(Math.floor((Math.random() * 20) + 1));
        console.log(`${D20}`);
        total += D20;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description die number generator
 * @returns {null}
 */
function calc100() {
    let D100;
    if (total !== 0) {
        total = 0;
    }
    while (rollz > 0) {
        D100 = Number(Math.floor((Math.random() * 100) + 1));
        console.log(`${D100}`);
        total += D100;
        rollz--;
    }
    console.log(`Total of all rolls: ${total}`);
    if (total !== 0) {
        total = 0;
    }
}

/**
 * @method
 * @description promts number of rolls
 * @returns {null}
 */
function askRolls() {
    rollz = Number(PROMPT.question(`Enter the number of times you wish to roll the die: `));
}
