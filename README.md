# ES6
Javascript 6

## String

### STR.CHARAT(N)
Retorna o caracter de acordo com o index de (n).

	const linguagem = 'JavaScript';
	linguagem.charAt(0); // J
	linguagem.charAt(2); // v
	linguagem.charAt(linguagem.length - 1); // t


### STR.CONCAT(STR2, STR3, ...)
Concatena as strings e retorna o resultado.

	const frase = 'A melhor linguagem é ';
	const linguagem = 'JavaScript';
	const fraseCompleta = frase.concat(linguagem, '!!');


### STR.INCLUDES(SEARCH, POSITION)
Procura pela string exata dentro de outra string. A procura é case sensitive.

	const fruta = 'Banana';
	const listaFrutas = 'Melancia, Banana, Laranja';
	listaFrutas.includes(fruta); // true
	fruta.includes(listaFrutas); // false

### STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

	const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

	listaPrecos.forEach((preco) => {
	  console.log(preco.padStart(10, '.'));
	})

	listaPrecos[0].padStart(10, '.'); // .....R$ 99
	listaPrecos[0].padEnd(10, '.');   // R$ 99.....


###STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

	let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
	listaItens = listaItens.replace(/[ ]+/g, ', ');

	let preco = 'R$ 1200,43';
	preco = preco.replace(',', '.'); // 'R$ 1200.43'

## Number

### N.TOLOCALESTRING(LANG, OPTIONS);
Formata o número de acordo com a língua e opções passadas.

	const preco = 59.49;
	preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
	preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

	MATH.CEIL(), MATH.FLOOR()
	ceil() arredonda para cima, retornando sempre uma integral e floor para baixo.
		Math.ceil(4.8334); // 5
		Math.ceil(4.3); // 5
		Math.floor(4.8334); // 4
		Math.floor(4.3); // 4

## Array

### ARRAY.FROM()
Array.from() é um método utilizado para transformar array-like objects (NodeList), em uma array.

	let li = document.querySelectorAll('li'); // NodeList
	li = Array.from(li); // Array
	const carros = {
	  0: 'Fiat',
	  1: 'Honda',
	  2: 'Ford',
	  length: 4,
	}

	const carrosArray = Array.from(carros);

### ARRAY.ISARRAY()
Verifica se o valor passado é uma array e retorna um valor booleano.

### [].UNSHIFT() E [].PUSH()
[].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

	const carros = ['Ford', 'Fiat', 'VW'];
	carros.unshift('Honda', 'Kia'); // 5
	carros.push('Ferrari'); // 6

### [].SHIFT() E [].POP()
[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

	const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
	const primeiroCarro = carros.shift(); // 'Ford'

	const ultimoCarro = carros.pop(); // 'Honda'

### [].SLICE()
[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

	const linguagens = ['html', 'css', 'js', 'php', 'python'];
	linguagens.slice(3); // ['php', 'python']
	linguagens.slice(1, 4); // ['css', 'js', 'php']

	const cloneLinguagens = linguagens.slice(); // serve para criar uma copia para uma nova variavel sem referencia.

## Arrays

### [].FOREACH()
[].forEach(callback(itemAtual, index, array))

	const carros = ['Ford', 'Fiat', 'Honda'];
	carros.forEach(function(item, index, array) {
	  console.log(item.toUpperCase());
	});

	// com Arrow Function
	carros.forEach((item, index, array) => {
	  console.log(item.toUpperCase());
	});

### Arrow Function

	const li = document.querySelectorAll('li');

	li.forEach(i => i.classList.add('ativa'));

	li.forEach(function(item) {
	  item.classList.add('ativa');
});

### [].MAP()
[].map(callback(itemAtual, index, array)) = funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

	const carros = ['Ford', 'Fiat', 'Honda'];
	const newCarros = carros.map((item) => {
	  return 'Carro ' + item;
	});

	carros; // ['Ford', 'Fiat', 'Honda']
	newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 


### [].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

	const aulas = [10, 25, 30];
	const total1 = aulas.reduce((acumulador, atual) => {
	  return acumulador + atual;
	});
	total1; // 65

	const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
	total2; // 165