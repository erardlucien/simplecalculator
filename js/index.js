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

const MAXVALUE = 1_000_000;

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
            values[1] = 1;
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

    if( value1 >= MAXVALUE || value2 >= MAXVALUE) {
        result.textContent = 'value1 and value2 should be lesser than 1,000,000!';
        return;
    }

    if( value1 <= -MAXVALUE || value2 <= -MAXVALUE) {
        result.textContent = 'value1 and value2 should be greater than -1,000,000!';
        return;
    }

    return [value1, value2];
}

function showResult (res) {
    res = res.toFixed(5);
    result.textContent = res;
}
