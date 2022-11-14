// Anonymous Function 
// IIFE = Imediately Invoked Function Expression

( function(a,b,c){
    let x = 3
    console.log(`Result: ${a+b+c}`);
    console.log(x);
})(1,2,3);

// Escopo da função
// precisa terminar com Ponto e virgula (;) 
( function(a,b,c){
    let x = 300
    console.log(`Result: ${a+b+c}`);
    console.log(x);
})(1,2,3);

(()=>{
    console.log('Arrow #01');
})();

(()=> console.log('Arrow #02'))();