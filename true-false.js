/**
 * Truthy
 * 1. true
 * 2.any number(positive,negative) will be truthy other then 0
 * 3.any string other then empty string
 * 4.'0','false'
 * 5. {},[]
 * check truthy
 * 6.!!===
 * */ 

/**
 * Falsy
 * 1.false
 * 2. number 0 then it is falsy
 * 3.''(empty string)
 * 4.undefined
 * 5.null
 * check falsy
 * 6.!===
 * */ 

const x = '';
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}