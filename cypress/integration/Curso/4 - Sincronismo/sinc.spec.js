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

    it.only('Uso do timeout', () => {
        cy.get('#buttonDelay').click();
        //cy.get('#novoCampo', {timeout: 1000}).should('exist'); // Irá gerar erro pois o elemento não existe, mas o cypress irá fazer retrys até o tempo limite de 1 segundo, e se o elemento não aparecer nesse tempo, irá gerar erro.
        cy.get('#novoCampo').should('exist'); //por padrão o cypress espera 4 segundos para o elemento aparecer, mas podemos alterar esse tempo com o timeout no arquivo cypress.json com "defaultoCommandTimeout"
        
    
    
    })

    it.only('Uso de timeout', () => {
        cy.wait(5000); //espera 5 segundos para executar o próximo comando
        cy.get('#buttonListDOM').click();
        cy.get('#lista > li > span' ,{timeout: 30000}) //espera 30 segundos para o elemento aparece, mas se aparecer antes do tempo ele segue a execuçãor
        cy.get('#lista > li > span')
            .should('contain', 'Item 2');
    
    })
})