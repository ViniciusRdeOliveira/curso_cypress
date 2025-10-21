/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')//cy é uma variavel que deve ser utilizada em todos os testes.
        
        // const title = cy.title();
        // console.log(title);

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title() // Mesma funçao que acima, porém mais performatico.
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');

        cy.title().then(title =>{ //tanto then como should tratan promisses.
            console.log(title)
        })

        //TODO imprimir log no console
        //TODO escrever title em um campo de texto    
    })

    it('Should find and interact with an element', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        // cy.get('#buttonSimple').click();
        // cy.get('#buttonSimple').should('have.value', 'Obrigado!');

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!'); // simplificando

    })

})