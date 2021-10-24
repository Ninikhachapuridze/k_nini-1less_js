// // 1
let  user = {
    firstname:'giorgi',
    lastname: 'smith',
    age: 25,
   studentstatus: 'active'
};
  console.log(user.studentstatus);

// //2

let x=[2,3,4,8,14,56,88,90]
for (let i = 0; i<x.length; i++) {
    console.log(x[i]);
}

let i=0
while(i<x.length){
    console.log(x[i]);
    i++;
}

// // 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for(let i=0; i<numbers.length; i++) {
    if(numbers[i]>5){
        console.log(numbers[i]);
    }
}
// 4

let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

for(i=0; i<users.length;i++){
    if(users[i].status ===true){
        console.log(users[i]);
    }
}

// 5


let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
for(i=0; i < arr.length; i++ ){
    const numbers = arr[i];
    for( let x=0; x< numbers.length; x ++ ){
        const positive = numbers[x];
        if(positive > 0) {
            console.log(positive);
        }
    }
}

// 6

console.log(6==='6'); 
// დააბრუნა false, რადგან ერთი არის სტრინგ ჩანაწერი , ხოლო მეორე ნამბერ ტიპის.

// 7

let array = ["html", "css", "bootstrap", "javascript","python"];
for(let i = 0; i < array.length; i++) {
    if( array[i].length > 5 && array[i].includes('ava')) {
        console.log(array[i]);
    }
}

// 8

let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}
if(user.age > 18 && user.studentstatus === 'active'){
    console.log("hello");
}
if(user.name==='giorgi'){
    console.log('hello giorgi');
}
 if(user.studentstatus==='active'|| user.age< 25){
    console.log('hello world');
    
}
else{
    console.log('error');
}

// 9
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
for(let i of array) {
    if( typeof i === 'string') {
        console.log(i);
    }
}
for(let i=0; i<array.length; i++) {
    if(typeof array [i] === "string"){
        console.log(array[i]);
    }
}    