let num1 = 5;
let num2= 7;
function multiply(a,b){
    a=20;
    const result = a* b;
    return result;
}
console.log(num1);  //no change
multiply(num1,num2);
console.log(num1);    //changed

let student = {name:'arju',partner:'zia'};
let student2 = {name:'arju mone',partner:'zia bahadur'};

function life(couple1,couple2){
    couple1.name ='jibon';
    couple2.partner= 'nurayeen';

}
console.log(student,student2); //no change 
life(student,student2);
console.log(student,student2);  //changed