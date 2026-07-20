/// <reference types = "cypress" />

describe('Acesso site',()=>{
 before(()=>{
    cy.viewport(1366, 768);
    cy.visit('https://www.frigelar.com.br');
    
 })

 beforeEach(()=>{
    cy.reload();
 })

    it.only('Deve fazer login',()=>{
        
        cy.get('.login-text', {timeout: 30000})
            .should('be.visible')
            .click()
        cy.get('#email').type('viniciusribeiro@frigelar.com.br');
        cy.get('#password').type('anthonyA1#');
        cy.get('#login-form > :nth-child(5) > .primaryBtn').click();
        cy.get('.logged > b').should('contain','Vinicius');

        
    })

    it.only('Deve Buscar produto',()=>{
        cy.get('#search-input', {timeout: 30000})
            .should('be.visible')
            .click()
            .type('Desumidificador de Ar');
        cy.get('.search-button').click();
        cy.get('.productListingContainer', {timeout: 10000}).should('be.visible');
    })

    it.only('AddToCart', ()=>{
        cy.visit('https://www.frigelar.com.br/desumidificador-de-ar-antimofo-permanente-eos-bivolt/p/kit1779', {timeout: 10000})
        
        cy.server()

        cy.route('POST', '**/logistic').as('logistic')

       // cy.get('#btnCalcularFrete').click()

        cy.wait('@logistic').then((xhr) => {
            expect(xhr.status).to.equal(200)
            expect(xhr.responseBody).to.have.property('success', true)

        })
    })
        
})   

