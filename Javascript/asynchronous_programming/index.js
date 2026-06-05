function division(a, callback){
    let dividedNumber= callback(a);
    console.log(dividedNumber);
}

function divide(a){
    return a/2;
}

division(6, divide)
