'use strict';

/**@type HTMLElement */
const add = document.querySelector("#add");
/**@type HTMLElement */
const mul = document.querySelector("#mul");
/**@type HTMLElement */
const sub = document.querySelector("#sub");
/**@type HTMLElement */
const divi = document.querySelector("#divi");
/**@type HTMLElement */
const result = document.querySelector("#result");
/**@type HTMLElement */
const reset = document.querySelector("#reset");

const MAX_VALUE = Number.MAX_VALUE;
const MIN_VALUE = Number.MIN_VALUE;

document.addEventListener("DOMContentLoaded", () => {

    add.addEventListener("click", () => {
        let values = retrieveValues();

        if(values === null || values === undefined) {
            return;
        }

        let res = values[0] + values[1];
        showResult(res);
    });
    
    mul.addEventListener("click", () => {
        let values = retrieveValues();

        if(values === null || values === undefined) {
            return;
        }
        
        let res = values[0] * values[1];
        showResult(res);
    });
    
    sub.addEventListener("click", () => {
        let values = retrieveValues();

        if(values === null || values === undefined) {
            return;
        }
 
        let res = values[0] - values[1];
        showResult(res);
    });
    
    divi.addEventListener("click", () => {
        let values = retrieveValues();

        if(values === null || values === undefined) {
            return;
        }

        if(values[1] == 0) {
            result.textContent = `${values[1]} is not allowed as divisor!`;
            return;
        }

        let res = values[0] / values[1];
        showResult(res);
    });

    reset.addEventListener("click", () => {
        document.querySelector("#field1").value = 5;
        document.querySelector("#field2").value = 5;
        result.textContent = 0;
    });
});

function containsOnlyNumbers(str) {
    return /^(\-{0,1}\d+\.{0,1}\d{0,5})$/.test(str);
}

function retrieveValues() {
    const field1Value = document.querySelector("#field1").value;
    const field2Value = document.querySelector("#field2").value;

    if(!containsOnlyNumbers(field1Value) || !containsOnlyNumbers(field2Value)) {
        result.innerHTML = 'value1 and value2 should be a number!<br> Only five digits are allowed after the point!';
        return;
    }

    let value1 = parseFloat(field1Value);
    let value2 = parseFloat(field2Value);

    if( value1 >= MAX_VALUE || value2 >= MAX_VALUE ) {
        result.textContent = `value1 and value2 should be lesser than ${MAX_VALUE}!`;
        return;
    }

    if( ( value1 <= MIN_VALUE || value2 <= MIN_VALUE ) && value1 != 0 && value2 != 0 ) {
        result.textContent = `value1 and value2 should be greater than ${MIN_VALUE}!`;
        return;
    }

    return [value1, value2];
}


function showResult (res) {

    if( res <= MIN_VALUE || res >= MAX_VALUE ) {
        result.textContent = `Out of range!`;
        return;
    }

    result.textContent = res.toFixed(7);
}
