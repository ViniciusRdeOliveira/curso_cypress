/// <reference types="cypress" />

describe('Trabalhando com elemntos basicos', () => {
    
    before(() =>{ //executa antes do primeiro teste
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    beforeEach(() =>{ //executa antes de cada teste
        cy.reload(); //recarrega a página antes de cada teste. NEste caso aqui usado para limpar os campos
    })

    it('Texto',() => {
      //  cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('body').should('contain','Cuidado');
        cy.get('span').should('contain','Cuidado'); // Um pouco mais acertivo a busca.
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');// Mais acertivo ainda, pois busca o texto exato.
        cy.get('.facilAchar').should('contain.text','Cuidado') //Diferente da busca acima que valida o texto exato, o contain busca apenas parte do texto.
    })

    it('Links', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html');
        //cy.get('a').click(); durante alguma atualização do curso o site mudou e o link não é mais o único da pagina
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text','Voltou!');

        cy.reload() //recarrega a página // ao recarregar a página o texto volta ao normal
        cy.get('#resultado').should('not.have.text','Voltou!'); // validando que o texto ainda não foi aplicado
        cy.contains('Voltar').click(); // clicando no botão
        cy.get('#resultado').should('have.text','Voltou!'); //Validando que após clicar no botão o texto foi exibido novamente.

    })

    it('Campos de Texto', () =>{
        cy.get('#formNome').type('Cypress Test');
        //cy.get('#formNome').should('have.text','Cypress Test'); 'have.text' não funciona para campos de texto, pois o valor do campo não é o mesmo que o texto do campo.
        cy.get('#formNome').should('have.value','Cypress Test'); // Validando o valor do campo de texto.

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???').type('???')

            cy.get('[data-cy=dataSobrenome]')
                .type('Teste12345{backspace}{backspace}', { delay: 200 })  // backspace apaga o último caractere digitado
                .should('have.value', 'Teste123') // validando que os dois últimos caracteres foram apagados

                cy.get('#elementosForm\\:sugestoes')
                    .clear() // limpa o campo
                    .type('Erro{selectall}acerto', { delay: 100 }) //selectall seleciona todo o texto do campo, e o acerto substitui o texto selecionado.
                    .should('have.value', 'acerto') // validando que o texto do campo foi substituido pelo acerto
                    
    })

    it('RadioButton',() =>{
        cy.get('#formSexoFem').click()
            .should('be.checked') //valida se o radio foii selecionado
        cy.get('#formSexoMasc').should('not.be.checked') //radio permite apenas uma seleção, então validamos se a outra opção não está selecionada.
        
        cy.get("[name ='formSexo']").should('have.length',2) //validando que existem apenas 2 radios com o mesmo name.
    })

    it('checkbox',() =>{
        cy.get('#formComidaPizza').click()
            .should('be.checked') //valida se o checkbox foii selecionado

        //cy.get('[name=formComidaFavorita]').click() gera erro pois tenta clicar em todos os checkbox, e não é permitido selecionar todos os checkbox
        cy.get('[name=formComidaFavorita]').click({multiple:true}) // para clicar em todos os elementos precisa passar o parametro multiple:true..
        cy.get('#formComidaPizza').should('not.be.checked') //validando que o checkbox pizza não está selecionado, pois o já havia sido selecionado no teste anterior.
        cy.get('#formComidaVegetariana').should('be.checked') //validando que o checkbox vegetariano está selecionado
    })

    it('combobox', () =>{
        cy.get('[data-test=dataEscolaridade]').select('2o grau completo')
            .should('have.value', '2graucomp') // este é o valor correto do combobox selecionado. (ver no html)
        cy.get('[data-test=dataEscolaridade]').select('1graucomp') // Para seleção, pode-se mandar o value também
            .should('have.value', '1graucomp') // este é o valor (value) correto do combobox selecionado. (ver no html)
    })

    it.only('Combo Multiplo', () =>{
        cy.get('[data-testid=dataEsportes]').select(['natacao','Corrida']) //Para combo multiplo se usa um Array com os Values (note que o 'n' é minusculo como no value)
    
    })

})
