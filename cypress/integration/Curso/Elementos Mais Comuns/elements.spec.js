/// <reference types="cypress" />

describe('work with basic elements', () => {

    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        //cy.get('body').should('contain', 'Cuidado');
        //cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado') // have.text não aceita parte do texto, apenas texto completo
    })
  
})