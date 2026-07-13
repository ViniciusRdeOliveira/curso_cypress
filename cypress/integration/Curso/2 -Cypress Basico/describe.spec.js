/// <reference types = "cypress" /> 



it.only ('A external test...',()=>{//only é para apenas este test ser executado.

})

// describe serve para agrupar testes
describe('Should Group tests...',()=>{
    describe('Should group more specific tests...',() =>{
        it.skip ('A specific test...',()=>{ //skip serve para pular o teste sem executa-lo
    

        })    
    })
    it ('A internal test...',()=>{
    

    })
})

