//1.countdown
let count=10;
do{
    console.log(count);
    count--;
}
while(count>=1)

//2.looping through an array
const colors=["red","green","yellow","blue"];
for(const color of colors){
    console.log(color);
}

//3.looping through an object
const person={
       name:"john",
       age:30,
       occupation:"software developer"
};
for(const key in person){
    console.log(`${key}:${person[key]}`);
}

//4.pattern of stars
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}

//5 .right angled triangle pattern
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*"
}
console.log(row);
}

 //6.print numbers with conditions
 for(let i=1;i<=10;i++){
    if(i%3==0 && i%5==0){
        console.log("keep moving");
    }
    else if(i%3==0){
        console.log("Move");
    }
    else if(i%5==0){
        console.log("go")
    }
    else{
        console.log(i);
    }
 }

//7 reverse string
const str="hello world";
let reversed="";
for(let i=str.length-1;i>=0;i--){
    reversed +=str[i];
}
console.log("reversed string is:",reversed);

//8 find the largest numbers in array
const number=[12,45,78,56,34,67];
let largest=number[0];
for(const num of number){
    if(num>largest){
        largest=num;
    }
}
console.log('the largest number is:',largest)

//9 calculate sum of array
const numbers=[12,23,45,46,78,89];
let sum=0;
for(const num of numbers){
    sum+=num;
}
console.log('the sum of the array is',sum);

//10 multiplication table
for(let i=1;i<=10;i++){
    console.log("2 X",i,"=",2*i)
}

//11 greater than 100
 let num=120;
 if(num>100){
    console.log("the number is greater than 100")
 }
 else{
    console.log("the number is less then or equal to 100")
 }

//12. student marks
let marks=85;
let grade;
if(marks>=80 && marks<=100){
    grade="distinction";
}
else if(marks>=60 && marks<=80){
    grade="First Class";
}
else if(marks>=50 && marks<=60){
    grade="Second Class";
}
else if(marks>35 && marks<50){
    grade="Pass";
}
else{
    grade="Fail";
}
  console.log("marks",marks);
  console.log("grade",grade);  



 