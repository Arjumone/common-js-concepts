function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstGiven  = kitchen();
console.log(firstGiven);