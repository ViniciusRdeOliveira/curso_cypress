/// <reference types="cypress"/>

describe('helpers', () =>{
    it('wrap', () =>{
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
    })
})