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

    it('links', () => {
        // cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!'); //get busca por elemento, id.

        cy.reload(); // recarreg a página

        cy.get('#resultado').should('have.not.text','Voltou!');

        cy.contains('Voltar').click() 
        cy.get('#resultado').should('have.text','Voltou!');// contains usa busca pelo texto em tela

    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test'); // type serve para escrever no campo form
        cy.get('#formNome').should('have.value','Cypress Test');
    
        cy.get('#elementosForm\\:sugestoes') // ao ter : deve adicionar o \\
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}') //{backspace} paga o caractere
            .should('have.value', 'Teste123')

            cy.get('#elementosForm\\:sugestoes') // ao ter : deve adicionar o \\
            .clear() // limpa o campo
            .type('Erro{selectall}acerto', {delay:100}) 
            .should('have.value', 'acerto')
    })

    it('RadioButton' ,()=>{ //validando a marcação de radio button
        cy.get('#formSexoFem')
            .click()
            .should('be.checked');
        cy.get('#formSexoMasc')
            .should('not.be.checked');

        cy.get("[name='formSexo']")
            .should('have.length',2) //verificando se há 2 radio buttons com o name formsexo        

    })

    it('CheckBox',()=>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked');

        cy.get('[name=formComidaFavorita]')
            .click({multiple:true}) // caso não tenha o parametro multiple dará erro pois há mais de 1 elemento com o mesmo name.
        

        cy.get('#formComidaPizza')
            .should('not.be.checked');
            
        cy.get('#formComidaCarne')
            .should('be.checked');
    })

    it.only('Combo', ()=>{
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value','2graucomp');

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value','1graucomp');


            // VALDAR AS OPÇÕES DE COMBO

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length',8)
        cy.get('[data-test=dataEscolaridade] option').then($arr =>{
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)  //usamos function para poderusar o this e realiza rum push ns valores do html
                
            }) 
            expect(values).to.include.members(["Superior","Mestrado"])
       })

            
    })

    //VALIDAR OPÇÕES SELECIONADAS DO COMBO MULTIPLO

    it.only('ComboMultiplo', ()=>{
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao','Corrida','nada']); // quando combo multiplo deve ser usado o value

        // cy.get('[data-testid=dataEsportes]').should('have.value',['natacao','Corrida','nada']) //erro gerado
        cy.get('[data-testid=dataEsportes]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao','Corrida','nada'])
            expect($el.val()).to.have.length(3)
        })    

         cy.get('[data-testid=dataEsportes]').invoke('val')
         .should('eql',['natacao','Corrida','nada'])

    })
})