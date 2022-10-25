// --------------------------------------------------------------------------------------

// Nullish Coalescing Operator

// const idade = 0;
// const idade1 = null;

// document.body.innerText = 'Sua idade é: a.' + (idade || 'Não informado') + ' - b.' + (idade ?? 'Não informado') +
//   ' - c.' + (idade1 || 'Não informado') + ' - d.' + (idade1 ?? 'Não informado');

// --------------------------------------------------------------------------------------

// OBJETOS

const user = {
  name: 'Cleisson',
  idade: 23,
  address: {
    street: 'Rua teste',
    number: 176,
  },
};

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

function mostraIdade({ address, idade: age, name = 'valor default' }) {
  return user.idade;
}

// document.body.innerText = JSON.stringify({ address, age, name });
// document.body.innerText = mostraIdade(user)


// Rest operator
// const { name, ...rest } = user; // retorna o resto das propriedade menos o que retirou, sendo o name

// document.body.innerText = JSON.stringify(rest);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
  // document.body.innerText += i
}

array1.forEach(item => {
  // document.body.innerText += item;
});

array1.map(item => {
  // document.body.innerText += item;
})

// . map também permite retornar um novo array 
const novoArray = array1.map(item => {
  if (item % 2 == 0)
    return item * 2;

  return item;
})
// document.body.innerText = JSON.stringify(novoArray);

// métodos mais importantes:
// map, filter, every, some, find, findIndex, reduce

// Filter retorna itens conforme condicional
const novoArray1 = array1.filter(item => item % 2 != 0)
// document.body.innerText = JSON.stringify(novoArray1);

// É possível juntar o filter com o map por exemplo. Assim como outros métodos
const novoArray2 = array1
  .filter(item => item % 2 != 0)
  .map(item => item * 10)
// document.body.innerText = JSON.stringify(novoArray2);

const array2 = [1, 2, 3, 4, 5, 6, 'a']

// Every retorna um booleano
const todosItensSaoNumeros = array2.every(item => {
  return typeof item == 'number' // se UMA opção não satisfazer a condição então retorna false
})
// document.body.innerText = JSON.stringify(todosItensSaoNumeros);

// Some retorna um booleano 
const peloMenosUmItemNaoEUmNumero = array2.some(item => {
  return typeof item == 'number' // se ALGUMA opção satisfazer a condição então retorna true
})
// document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)

// Find retorna um valor conforme condição
const par = array2.find(item => {
  return item % 2 == 0 // retorna o PRIMEIRO valor que satisfaz a condição
})                    // se não existir nenhum então retorna UNDEFINED
// document.body.innerText = JSON.stringify(par)

// FindIndex retorna o indice de um valor conforme condição
const indice = array2.findIndex(item => {
  return item % 2 == 0 // retorna o PRIMEIRO valor que satisfaz a condição
})                    // se não existir nenhum então retorna UNDEFINED
// document.body.innerText = JSON.stringify(indice)

const array3 = [1, 2, 3, 4, 5]

// Reduce 
const somaReduce = array3.reduce((acumulator, item) => {
  // document.body.sinnerText += 'Count: ' + acumulator + ', +' + item + ' --- '

  return acumulator + item
}, 0) // último parametro diz como vai iniciar o que deseja fazer no reduce
// nesse caso fazer soma do array e inicia em 0, se fosse um objeto iniciaria por exemplo como {} 
// document.body.innerText = JSON.stringify(somaReduce)



// --------------------------------------------------------------------------------------

// Template Literals

const name1 = 'Cleisson';
const message = 'Bem-vindo, ' + name1
// document.body.innerText = JSON.stringify(message)

const name2 = '';
const message1 = `Bem-vindo,  ${name2 ? name2 : 'visitante'}`;
// document.body.innerText = JSON.stringify(message1)



// --------------------------------------------------------------------------------------

// Promises
// nem tudo é síncrono ou executa exatamente no mesmo momento que mandamos executar
// existem coisas que demoram para retornar informações
// não podemos deixar a aplicação esperando essa resposta pra voltar a funcionar
// Promises ajuda a manter o código funcionando nesses casos

// resolve deu certo (then), reject deu errado (catch)
const somaDoisNumeros = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a + b);
    // reject(a + b);
  }, 2000)
})

somaDoisNumeros(1, 3)
  .then(soma => {
    // document.body.innerText = 'Deu certo: ' + soma;
    // console.log('Deu certo: ' + soma)
  })
  .catch(err => {
    // document.body.innerText = 'Tratamento de erro: ' + err;
    // console.log('Tratamento de erro: ' + err)
  })


// fetch é uma Promisse
// finally indiferente se executou o .then ou .catch o .finally é executado ao final
fetch('https://api.github.com/users/CleissonVieira')
  .then(response => {
    // return response.json();
  })
  .then(body => {
    // console.log(body)
  })
  .catch(err => {
    // console.log('err: ')
    // console.log(err)
  })
  .finally(() => {
    // console.log('Final chegou')
  })

// Outra forma de fazer o fetch acima
// Se eu uso async em qualquer função, essa vira uma Promisse
async function buscaDadosNoGitHub() {
  try {
    const response = await fetch('https://api.github.com/users/CleissonVieira');
    const body = await response.json();

    // console.log(body)

    return body.name
  } catch (err) {
    // console.log(err)
  } finally {
    // console.log('Final chegou')
  }
}

buscaDadosNoGitHub().then(name => {
  // console.log('Nome: ' + name)
});


// --------------------------------------------------------------------------------------

// Casas decimais com string
const valueX = 15;
// document.body.innerText = valueX.toFixed(2);

// --------------------------------------------------------------------------------------


// Importações

import { soma, subtracao as sub } from "./lib/math"; // importa cada função desejada do arquivo, possivel nomear com AS
import * as math from "./lib/math"; // dessa forma crio um objeto com todas as funções da importação
import teste from "./lib/sum"; // nesse padrão default posso alterar o nome da função

console.log(soma(2, 6))
console.log(sub(2, 6))

console.log(math.soma(2, 6))
console.log(math.subtracao(2, 6))

console.log(teste(2, 6))










