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


const getSomething = callback => {
    setTimeout(() => {
       callback (12);
    }, 1000)
}
 
const system = () => {
    console.log (`init`);
     getSomething (some => console.log(`Something is ${some}`))
    console.log(`end`);
}

system();