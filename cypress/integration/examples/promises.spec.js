/*No JavaScript, uma promise é um objeto que representa o 
resultado de uma operação assíncrona, que pode ser bem-sucedida ou falhar. 
Promises são a base da programação assíncrona moderna. */

//////////////////////////////////////

it('sem testes ainda',() =>{})

// const getSomething = () => 10;

// const system = () =>{
    // console.log('init');
    // const something = getSomething();
    // console.log(`Something is ${something}`)
    // console.log(`end`);
// }

// system();
// 


// const getSomething = () => {
//     setTimeout(() => {
//         console.log('respondendo');
//         return 11;
//     }, 1000)
// }
 
// const system = () => {
//     console.log (`init`);
//     const something = getSomething();
//     console.log(`Something is ${something}`)
//     console.log(`end`);
// }

// system();


// const getSomething = callback => {
    // setTimeout(() => {
    //    callback (12);
    // }, 1000)
// }
 
// const system = () => {
    // console.log (`init`);
    // getSomething (some => console.log(`Something is ${some}`)) // executando de forma sincrona.
    // console.log(`end`);
// }

// system();


// 


const getSomething = () => {
    return new Promise ((resolve, reject) => { // resolve é a função chamada quando a Promisses for resolvida e REject vai ser invocado quando tiver algum problema na Promisses
        setTimeout(() => {
            resolve (13);
        }, 1000)
    })
}
 
const system = () => {
    console.log (`init`);
    const prom = getSomething();
    prom.then(some => {
        console.log(`Something is ${some}`)
    })
    console.log(`end`);
}

system();