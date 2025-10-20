/// <reference types="cypress" />

describe('Esportes', ()=>{

    before(() => { // antes de executar os testes irá visitar a página. Será executado antes de todos os testes

        cy.visit('https://wcaquino.me/cypress/componentes.html');
  
    })
    
    beforeEach(() =>{ // a cada teste é executado um reload de URL (cy.visit)
         cy.reload();

    })

    it('deve aguardar o elelmento estar disponivel', ()=>{

        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funciona');

    })

        it.only('deve fazer retrys', ()=>{

        cy.get('#buttonDelay').click();
        cy.get('#novoCampo')
            .should('exist')
            .should('not.exist'); // nao se deve agrupar duas acertivas uma contraditória da outra.
            
        
    })

})