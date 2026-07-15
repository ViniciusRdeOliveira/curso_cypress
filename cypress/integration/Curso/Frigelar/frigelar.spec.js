/// <reference types = "cypress" />

describe('Acesso site',()=>{
 before(()=>{
    cy.viewport(1366, 768);
    cy.visit('https://www.frigelar.com.br');
    
 })

 beforeEach(()=>{
    cy.reload();
 })

    it('Deve fazer login',()=>{
        
        cy.get('.login-text')
            .should('be.visible')
            .click()
        cy.get('#email').type('viniciusribeiro@frigelar.com.br');
        cy.get('#password').type('anthonyA1#');
        cy.get('#login-form > :nth-child(5) > .primaryBtn').click();
        cy.get('.logged > b').should('contain','Vinicius');

        
    })

    it.only('Deve Buscar produto',()=>{
        cy.get('#search-input').should('be.visible').type('Desumidificador de Ar');
    })
        
})   

