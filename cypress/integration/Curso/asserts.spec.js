///<reference types="cypress" />

it('equality', ()=> { // equalidade ou equivalencia

const a = 1;
expect(a).equal(1);
expect(a, 'deveria ser 1').equal(1);
expect(a).to.be.equal(1); //nenhuma alteração de execução referente a linha 6, somente para melhor leitura de código.
expect('a').not.to.be.equal('b') //negação

})


it('truthy', () =>{ //Veracidade
    const a = true;
    const b = null;
    let c;

    expect(true).to.be.true;
    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.to.null;
    expect(c).to.be.undefined;

})

it('Obrject Equality', ()=>{
    
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);

    expect(obj).to.be.deep.equal({a:1, b:2}); //deep verifica a propriedade do obj para ver se são iguais.
    expect(obj).eql({a:1,b:2});
    expect(obj).include({a:1});
    expect(obj).to.have.property('b'); // verifica se há propriedade 'b' independente do valor
    expect(obj).to.have.property('b',2); //verifica se ha propriedade 'b' e se é = 2
    expect(obj).not.to.be.empty;
    expect({}).to.calledBefore.empty;

})

it('Arrays', () =>{
    const arr = [1,2,3]
    
    expect(arr).to.have.members([1,2,3]);
    expect(arr).to.have.include.members([1,3]); // verifica se apenas alguns membros fazem parte do objeto
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;


})

it('Types',  () => {

    const num = 1;
    const str = 'String';

   expect(num).to.be.a('number');
   expect(str).to.be.a('String');
   expect({}).to.be.a('object');
   expect([]).to.be.a('array');
})


it ('String', () => {
    const str ='String de Teste';

    expect(str).to.be.equal('String de Teste');
    expect(str).to.be.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/String/); //regex
    expect(str).to.match(/^String/); //inicia com String (camelCase)
    expect(str).to.match(/Teste$/); //finaliza com teste(camelCase)
    expect(str).to.match(/.{15}/); //tamanho da string
    expect(str).to.match(/S+/); // verifica se contem a letra    
    expect(str).to.match(/\D+/); // Não contem números

})

it('numbers', ()=> {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3); // maior que 3
    expect(number).to.be.below(7); // menor que 7
    expect(floatNumber).to.be.equal(5.2123);
    expect(floatNumber).to.be.closeTo(5.2, 0.1); // aproximado de numero 5.2 com variação de 0.1%
    expect(floatNumber).to.be.above(5);

})