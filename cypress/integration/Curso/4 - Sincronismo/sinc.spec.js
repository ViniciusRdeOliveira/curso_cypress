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

    it.only('Uso do Find', () => {
        
        cy.get('#buttonList').click();
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');

        //  cy.get('#lista li')
        //     .find('span')
        //     .should('contain', 'Item 2');

        cy.get('#lista li span') // como os 2 gets possuiam a mesma "regra, a segunda precisa ser completa."
            .should('contain','Item 2');

    })

    it.only('Uso do Timeout', () =>{
        // default de timeout do cypress é de 4segundos. Para alterar este valor, veja no arquivo cypress.json

        // cy.get('#buttonDelay').click();
        // cy.get('#novoCampo', {timeout:1000}).should('exist'); //definindo um timeout de 1 segundo para gerar uma falha.

        // cy.get('#buttonList').click();
        // // cy.wait(5000); // para a execução por tempo definido. Porém esta espera fixa pode causar problemas. Use apenas se você souber o tempo exato de espera.
        // cy.get('#lista li span',{timeout:30000}) //timeout é o tempo de espera para o cypress gerar o erro. Mas se a acertiva foi validada antes, o tempo é encerrado.
        //     .should('contain','Item 2');

       cy.get('#buttonListDOM').click();
        cy.get('#lista li span',{timeout:30000})
            .should('have.length',2)

    })

})