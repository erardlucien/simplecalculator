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
        let res = values[0] + values[1];
        showResult(res);
    });
    
    mul.addEventListener("click", () => {
        let values = retrieveValues();
        let res = values[0] * values[1];
        showResult(res);
    });
    
    sub.addEventListener("click", () => {
        let values = retrieveValues();
        let res = values[0] - values[1];
        showResult(res);
    });
    
    divi.addEventListener("click", () => {
        let values = retrieveValues();
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

function retrieveValues() {
    let value1 = parseInt(document.querySelector("#field1").value);
    let value2 = parseInt(document.querySelector("#field2").value);

    if( value1 >= MAXVALUE || value2 >= MAXVALUE) {
        result.textContent = 'value1 and value2 should be less than 1,000,000!';
        return;
    }

    if( value1 <= -MAXVALUE || value2 <= -MAXVALUE) {
        result.textContent = 'value1 and value2 should be greater than -1,000,000!';
        return;
    }

    return [value1, value2];
}

function showResult (res) {
    result.textContent = res;
}
