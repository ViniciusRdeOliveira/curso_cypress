/// <reference types="cypress" />

describe('Sincronismo', ()=>{

    before(() => { 

        cy.visit('https://wcaquino.me/cypress/componentes.html');
  
    })
    
    beforeEach(() =>{ 
        cy.reload();

    })

    it('Aguardando elemento estar disponível', () =>{ // o cypress por padrão já espera o elemento estar disponível, mas podemos usar o should para validar se o elemento existe ou não.
        cy.get('#novoCampo').should('not.exist'); 
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist')
            .type('funciona');
    })

     it.only('Deve fazer retrys', () =>{ // o cypress por padrão já espera o elemento estar disponível, mas podemos usar o should para validar se o elemento existe ou não.
       
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist')
            .should('exist'); // Irá gerar erro pois o elemento não existe, mas o cypress irá fazer retrys até o tempo limite de 4 segundos, e se o elemento não aparecer nesse tempo, irá gerar erro.
    })

    it.only('Uso do find', ()=> {
        cy.get('#buttonList').click();
        cy.get('#lista > li')
            .find('span')
            .should('contain', 'Item 1');
        cy.get('#lista > li > span')

            .should('contain', 'Item 2'); // Irá gerar erro pois o elemento não existe, mas o cypress irá fazer retrys até o tempo limite de 4 segundos, e se o elemento não aparecer nesse tempo, irá gerar erro.



     })

   it.only('Lista DOM', ()=> {
       cy.get('#buttonListDOM').click();
        cy.get('#lista > li')
            .find('span')
            .should('contain', 'Item 1');
        cy.get('#lista > li > span')

            .should('contain', 'Item 2');

    })
    
})