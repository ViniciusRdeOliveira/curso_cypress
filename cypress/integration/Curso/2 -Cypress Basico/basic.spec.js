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

        let syncTitle

        cy.title().then(title =>{ //tanto then como should tratam promisses.
            console.log(title)

            cy.get('#formNome').type(title);

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el =>{
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el =>{ //caso tenha apenas uma \ irá cusar erro.
            cy.wrap($el).type(syncTitle)
        })

    
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