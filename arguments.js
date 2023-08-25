// arguments is array like object
function sum(a,b,c){    //parameters
    console.log(arguments[5]);   //atak sudu function vitorei pawa jabe
    const args = [...arguments];  //avabe array er modde pawa jabe
    console.log(args);
    const result = a+b+c;
    return result;
}
const total = sum(45,65,23,55,90,25);   //arguments
console.log(total);