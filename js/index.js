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
    return /^(\-{0,1}\d+\.{0,1}\d{0,5})$/.test(str) || /^(\-{0,1}\d+\.{0,1}\d{0,2}e{0,1}\-{0,1}\d{0,3})$/.test(str);
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

    if( !isInsideRange(value1) || field1Value !== value1.toString() ) {
        result.textContent = `${field1Value} is out of range`;
        return;
    } else if( !isInsideRange(value2) || field2Value !== value2.toString() ) {
        result.textContent = `${field2Value} is out of range`;
        return;
    }

    return [value1, value2];
}

function isInsideRange(value) {
    return value === 0 || Math.abs(value) > MIN_VALUE && Math.abs(value) < MAX_VALUE;
}

function isFloatingPoint(res) {
    let tmp = res.toString();

    return tmp.includes('.');
}

function showResult (res) {

    if( !isInsideRange(res) ) {
        result.textContent = `${res} is out of range!`;
        return;
    } else if( isFloatingPoint(res) ) {
        result.textContent = res.toPrecision(7);
    } else {
        result.textContent = res;
    }

}
