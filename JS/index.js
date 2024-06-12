
let b = ["APPLE", "BANANA", "CHERRY"];

const c = b.map((item,index)=>item.charAt(0));
console.log(c)
let g = [1,4,33,45,6,2,3,4,5];

let g2= g.map(multiply);

function multiply(item){
    return item*2;
}



let g3=g.map((item)=>{
    return item+3;
})
console.log(g3)

let g4 = g.filter(moreThanFive);

function moreThanFive(item){
    return item>5;
}
console.log(g4)

let g5 = g.filter((item)=>{
return item>3
})
console.log(g5)

let g6= g.reduce((item,value)=>{
    return item*value;
})
console.log(g6);


//objects

let student = {
    name:"hashr",
    age:"22",
    height:12
}

let student2 = new Object();

student2.name = "hashr";
student2.age = "22";
student2.height = "12";

console.log(student2);

function students (name,age,height){

    this.name = name;
    this.age = age;
    this.height = height;
}

let stud = new students ("sss","31","33");
console.log(stud);

