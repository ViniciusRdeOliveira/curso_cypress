/// <reference types="cypress" />

describe('work with basic elements', () => {
    before(() => { // antes de executar os testes irá visitar a página. Será executado antes de todos os testes


        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    // beforeEach(() =>{
    //     cy.visit('https://wcaquino.me/cypress/componentes.html');
    // }) //before each executa todas as vezes antes de cada teste (cada 'it')

    it('Text', () => {
        // cy.visit('https://wcaquino.me/cypress/componentes.html');
        //cy.get('body').should('contain', 'Cuidado');
        //cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado')
       // cy.get('.facilAchar').should('have.text', 'Cuidado') // have.text não aceita parte do texto, apenas texto completo
    })

    it.only('links', () => {
        // cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!'); //get busca por elemento, id.

        cy.reload(); // recarreg a página

        cy.get('#resultado').should('have.not.text','Voltou!');

        cy.contains('Voltar').click() 
        cy.get('#resultado').should('have.text','Voltou!');// contains usa busca pelo texto em tela

    })
  
})