function number( num, callback){
    let squareNumber= callback(num);
    console.log(squareNumber)
}

function square(num){
    return num*num;
}

number(2, square)




