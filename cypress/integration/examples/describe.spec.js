/// <reference types="cypress" />

it.only('Um teste externo', () => { //only faz comque seja executado apenas este teste

})

describe('Um grupo de testes', () => {
   describe ('Um grupo de testes especifico 1', () => {
    it.skip('Um teste interno especifico 1', () => { 
    }) // o .skip faz "pular" o teste não o executando-o


    it('Um teste interno', () => {

    })
    })
    describe ('Um grupo de testes especifico 2', () => {
        it('Um teste interno especifico 2', () => { 
        })
    
    
        it('Um teste interno', () => {
    
        })
        })
})