/// <reference types="cypress" />

//Alerts não são exibidos em tela no cypress. O evento ocorre normalemnte e o cypress notifica a executão do evento, mas não exibe o 'popup' de alert.

describe('work with alerts', () => {
    before(() => { // antes de executar os testes irá visitar a página. Será executado antes de todos os testes
        cy.visit('https://wcaquino.me/cypress/componentes.html');

    })

    beforeEach(() =>{
        cy.reload()
    })

    it.only('Alert', ()=>{

        cy.get('#alert').click()
        cy.on('window:alert', msg => { // .on pega eventos que ocorrem em tela
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })  
    })

    it.only('Alert com mock', ()=>{

        const stub = cy.stub().as('ALERTA') // dando nome a um stub 
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples') //chamada do stub como um array
        })
    })

     it.only('Confirm', () => {

        cy.on('window:confirm', msg => { 
            expect(msg).to.be.equal('Confirm Simples')
        })  
        
        cy.on('window:alert', msg => { 
            expect(msg).to.be.equal('Confirmado')
        })

        cy.get('#confirm').click()

    })

    it.only('Deny', () => {

        cy.on('window:confirm', msg => { 
            expect(msg).to.be.equal('Confirm Simples')
            return false //vai fazer com que ao abrir a tela de confirme, seja selecionado a negação.
        })  
        
        cy.on('window:alert', msg => { 
            expect(msg).to.be.equal('Negado')
        })
        
        cy.get('#confirm').click()

    })

   it.only('Prompt', () => {

        cy.window().then(win =>{
            cy.stub(win,'prompt').returns('42') // criando um stub para o método prompt
        })

        cy.on('window:prompt', msg => { 
            expect(msg).to.be.equal('Era 42?')
           
        })  
        
        cy.on('window:alert', msg => { 
            expect(msg).to.be.equal(':D')
        })
        
        cy.get('#prompt').click()

    })

    it.only('Valida Mensagem', ()=>{

        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub )
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Vinicius')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

   

        cy.get('[data-cy=dataSobrenome]').type('Oliveira')
        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))


        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado')

     })

})
