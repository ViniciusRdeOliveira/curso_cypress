it ('nada agora', function(){

})

/*function soma (a,b){
    return a+b;
}

console.log(soma(1,4)) 
*/

/*const soma =function(a,b){
    return a+b;
}

console.log(soma (1,4))*/

/*const soma = (a,b) => {
    return a+b;
}*/

const soma = (a,b) =>  a+b;
 

console.log (soma(1,4));

it ('a function test...', function(){
    console.log('function',this)
})

it ('a arrow test...', ()=>{
    console.log('arrow',this) // este resultado gera um undefined
})

