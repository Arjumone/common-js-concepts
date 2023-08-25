//  function er ja lika hobe take sekanei pawa jabe mane otai tar scope


function add(a,b){
    const sum =a+b;
    // console.log(sum);  // worked
    if(b>5){
        const sum2 = 25+a+ b;
        console.log(sum2); //ata kaj korbe
    }
    // console.log(sum2);  //ata kaj korbena 2nd breket er bhaire dile
    return sum;
}
// console.log(a,b);  //avabe function er bhaire a r b k pawa jabena
const result = add(2,5);
console.log(result);