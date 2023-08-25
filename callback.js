function greeting(greetingHandler,name){
    greetingHandler(name);
}
// const number = [45,34,87];
function greetingHandler(name){
    console.log('good morning',name);
}

function greetingEvening(name){
    console.log('good evening', name);
}

greeting(greetingHandler,'Tom Hanks');
greeting(greetingHandler,'tommy');
greeting(greetingEvening,'tom')