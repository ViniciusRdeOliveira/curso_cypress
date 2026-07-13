/// <reference types = "cypress" />

describe('Acesso site',()=>{
   it('Deve acessar o site',()=>{
        cy.viewport(1366, 768);
        cy.visit('https://www.frigelar.com.br', {
        failOnStatusCode: false
        });
        cy.title().should('be.equal', 'Frigelar: A Loja de Refrigeração e Climatização Líder no Brasil!');
        
    });

    it.only('Deve fazer login',()=>{
        cy.viewport(1366, 768);
        cy.visit('https://www.frigelar.com.br', {
        failOnStatusCode: false
        });
        cy.get('.login-text').click();
        cy.get('#email').type('viniciusribeiro@frigelar.com.br');
        cy.get('#password').type('anthonyA1@');
       // cy.get('#login-form > :nth-child(5) > .primaryBtn').click();
        
    })
        
})   

