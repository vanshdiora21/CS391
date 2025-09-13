// assets/calculator.js

function getInputs(){
    const a = document.getElementById('first-number').value.trim(); // getElementById returns the element by unique id [7]
    const b = document.getElementById('second-number').value.trim(); // unique id usage ensures quick access [7]
    const x = parseFloat(a);
    const y = parseFloat(b);
    return {a, b, x, y};
}

function showResult(value){
    const out = document.getElementById('output'); // DOM access by id [7]
    out.classList.toggle('negative', Number(value) < 0); // style negative values red per spec [1]
    out.innerHTML = String(value); // display via innerHTML per instructions [1][2]
}

function validateNumbers(){
    const {a, b, x, y} = getInputs();
    if (a === '' || b === '' || Number.isNaN(x) || Number.isNaN(y)){
        showResult('Please enter two numbers');
        return null;
    }
    return {x, y};
}

// Note: function name is "addition", NOT "add", to avoid built-in name conflicts per brief [1]
function addition(){
    const v = validateNumbers(); if(!v) return;
    showResult(v.x + v.y);
}
function subtraction(){
    const v = validateNumbers(); if(!v) return;
    showResult(v.x - v.y);
}
function multiplication(){
    const v = validateNumbers(); if(!v) return;
    showResult(v.x * v.y);
}
function division(){
    const v = validateNumbers(); if(!v) return;
    if (v.y === 0){ showResult('Cannot divide by zero'); return; }
    showResult(v.x / v.y);
}

// Power via for-loop only (no Math.pow, no **), per grading rule [1]
function power(){
    const v = validateNumbers(); if(!v) return;
    const base = v.x;
    const expRaw = v.y;
    const exp = Math.trunc(expRaw); // ensure integer stepping in the loop [1]
    let result = 1;

    if (expRaw !== exp){
        showResult('Exponent must be an integer for this calculator');
        return;
    }
    if (exp === 0){
        showResult(1);
        return;
    }
    const n = Math.abs(exp);
    for (let i=0; i<n; i++){ // required for-loop implementation [1]
        result *= base;
    }
    if (exp < 0){
        result = 1 / result;
    }
    showResult(result);
}

function clearCalculator(){
    document.getElementById('first-number').value = ''; // clear input per brief [1][7]
    document.getElementById('second-number').value = ''; // clear input per brief [1][7]
    const out = document.getElementById('output'); // get output element [7]
    out.innerHTML = ''; // clear output via innerHTML per brief [1][2]
    out.classList.remove('negative'); // remove negative style [1]
}
