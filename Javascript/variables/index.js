var hello_world="Hello World"
console.log(hello_world);

let hello_world2="Hellow World 2"
console.log(hello_world2);

const hello_world3="Hello World 3"
console.log(hello_world3);

//redeclaration and reassingment
var a=10
var a=20
a=50
console.log(a,"aaaa");

//let reassignment and canot redeclare

let b=20
b=30
console.log(b,"bbbb");

//const cannot reassign and redeclare

const pi=3.14;
console.log(pi,"test");

//block scope
//{

//}

if(true){
    var c =10;
    //let and const are block scoped
    let d=20;
    const e=30;
    console.log(c,d,e);
}
console.log(c,"test c outside")
console.log(d,e,"test d and e outside")

for(let i=0; i<=5)