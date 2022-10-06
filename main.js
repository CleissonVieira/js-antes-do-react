// --------------------------------------------------------------------------------------

// Nullish Coalescing Operator

// const idade = 0;
// const idade1 = null;

// document.body.innerText = 'Sua idade é: a.' + (idade || 'Não informado') + ' - b.' + (idade ?? 'Não informado') +
//   ' - c.' + (idade1 || 'Não informado') + ' - d.' + (idade1 ?? 'Não informado');

// --------------------------------------------------------------------------------------

// Objetos

const user = {
  name: 'Cleisson',
  idade: 23,
  address: {
    street: 'Rua teste',
    number: 176,
  },
};

// document.body.innerText = ('name' in user)
// document.body.innerText = 'Chaves: ' + Object.keys(user);
// document.body.innerText = 'Chaves: ' + JSON.stringify(Object.keys(user));
// document.body.innerText = 'Valores: ' + Object.values(user)
// document.body.innerText = 'Valores: ' + JSON.stringify(Object.values(user));
// document.body.innerText = 'Vetor para cada Chave e Valor: ' + Object.entries(user);
document.body.innerText = 'Vetor para cada Chave e Valor: ' + JSON.stringify(Object.entries(user));

// --------------------------------------------------------------------------------------

