# ES6
Javascript 6

STR.CHARAT(N)
Retorna o caracter de acordo com o index de (n).

	const linguagem = 'JavaScript';
	linguagem.charAt(0); // J
	linguagem.charAt(2); // v
	linguagem.charAt(linguagem.length - 1); // t


STR.CONCAT(STR2, STR3, ...)
Concatena as strings e retorna o resultado.

	const frase = 'A melhor linguagem é ';
	const linguagem = 'JavaScript';
	const fraseCompleta = frase.concat(linguagem, '!!');


STR.INCLUDES(SEARCH, POSITION)
Procura pela string exata dentro de outra string. A procura é case sensitive.

	const fruta = 'Banana';
	const listaFrutas = 'Melancia, Banana, Laranja';
	listaFrutas.includes(fruta); // true
	fruta.includes(listaFrutas); // false

STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

	const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

	listaPrecos.forEach((preco) => {
	  console.log(preco.padStart(10, '.'));
	})

	listaPrecos[0].padStart(10, '.'); // .....R$ 99
	listaPrecos[0].padEnd(10, '.');   // R$ 99.....


STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

	let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
	listaItens = listaItens.replace(/[ ]+/g, ', ');

	let preco = 'R$ 1200,43';
	preco = preco.replace(',', '.'); // 'R$ 1200.43'

Number

	N.TOLOCALESTRING(LANG, OPTIONS);
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