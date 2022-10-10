// --------------------------------------------------------------------------------------

// Nullish Coalescing Operator

// const idade = 0;
// const idade1 = null;

// document.body.innerText = 'Sua idade é: a.' + (idade || 'Não informado') + ' - b.' + (idade ?? 'Não informado') +
//   ' - c.' + (idade1 || 'Não informado') + ' - d.' + (idade1 ?? 'Não informado');

// --------------------------------------------------------------------------------------

// OBJETOS

const user1 = {
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
// document.body.innerText = 'Vetor para cada Chave e Valor: ' + JSON.stringify(Object.entries(user));


// Desestruturação, desmontar parte do objeto

// normal
// const address = user.address
// desestruturado
// const { address } = user;
// const { address, idade: age, name = 'valor default' } = user;

// function mostraIdade({ address, idade: age, name = 'valor default' }) {
//   return user.idade;
// }

// document.body.innerText = JSON.stringify({ address, age, name });
// document.body.innerText = mostraIdade(user)


// Rest operator
// const { name, ...rest } = user; // retorna o resto das propriedade menos o que retirou, sendo o name

// document.body.innerText = JSON.stringify(rest);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, , third, ...rest] = array;

// document.body.innerText = JSON.stringify({ first, third, rest });


//Short Syntax
const name = 'Cleisson'
const age = 23

const user2 = {
  name,
  age,
};

// document.body.innerText = JSON.stringify(user2);


// Optional Chaining (útil para variáveis que possam não existir)
const user3 = {
  name: 'Cleisson',
  age: 23,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      // code: '23143245',
      city: 'cidade',
    },
    // showFullAddress() {
    //   return 'Endereço completo'
    // }
  },
};

// document.body.innerText = user3.address?.zip?.code ?? 'Não informado';
// document.body.innerText = user3.address?.showFullAddress?.() ?? 'Não informado';


// Métodos de array
const array1 = [1, 2, 3, 4, 5]

for (const i of array1) {
  document.body.innerText += i
}

// --------------------------------------------------------------------------------------

