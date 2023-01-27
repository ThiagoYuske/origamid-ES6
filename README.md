# ES6

Javascript 6

https://www.origamid.com/slide/javascript-completo-es6/#/0101-javascript-completo-es6/1

<br/>
<br/>

## HTML Tags

```html
	dl - definition list
	dt - definition tag
	dd - definition description
	<dl>
		<dt>Firefox</dt>
		<dd>A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</dd>

		<!-- other terms and definitions -->
	</dl>
```

## HTML Collection x Node Collection

### HTML

```js
	document.getElementById()
	document.getElementByName()
	document.getElementByClassName()
	document.getElementByTagName()
```
### Node

```js
	document.querySelector()
	document.querySelectorAll()

	Os dois retornam Array-like porém no Node ele possui as funções e nao HTML precisa converter para Array:
		Array.from(<array-like>)
```

### JS:
```js
	Foreach:
		<element>.forEach(function(<value>, <index>, <array>){
			console.log(item);
		})

	Arrow Function:
		<element>.forEach((item) => {
			console.log(item);
		})

	Window size
		const small = window.matchMedia('(max-width: 600px)');

	if(small.matches) {
		console.log('Tela menor que 600px')
	} else {
		console.log('Tela maior que 600px')
	}

	toggle = adicionar a classe quando tiver e o contrario remover.

	Object.getOwnPropertyNames() = Mostra as funções do objeto
```

# Getting Started
<br/>

> String

<br/>

## STR.CHARAT(N)
Retorna o caracter de acordo com o index de (n).

```js
	const linguagem = 'JavaScript';
	linguagem.charAt(0); // J
	linguagem.charAt(2); // v
	linguagem.charAt(linguagem.length - 1); // t
```

<br/>

## STR.CONCAT(STR2, STR3, ...)
Concatena as strings e retorna o resultado.

```js
	const frase = 'A melhor linguagem é ';
	const linguagem = 'JavaScript';
	const fraseCompleta = frase.concat(linguagem, '!!');
```

<br/>

## STR.INCLUDES(SEARCH, POSITION)
Procura pela string exata dentro de outra string. A procura é case sensitive.

```js
	const fruta = 'Banana';
	const listaFrutas = 'Melancia, Banana, Laranja';
	listaFrutas.includes(fruta); // true
	fruta.includes(listaFrutas); // false
```

<br/>

## STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

```js
	const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

	listaPrecos.forEach((preco) => {
	  console.log(preco.padStart(10, '.'));
	})

	listaPrecos[0].padStart(10, '.'); // .....R$ 99
	listaPrecos[0].padEnd(10, '.');   // R$ 99.....
```

<br/>

## STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

```js
	let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
	listaItens = listaItens.replace(/[ ]+/g, ', ');

	let preco = 'R$ 1200,43';
	preco = preco.replace(',', '.'); // 'R$ 1200.43'
```

<br/>
<br/>

> Number

<br/>

## N.TOLOCALESTRING(LANG, OPTIONS);
Formata o número de acordo com a língua e opções passadas.

```js
	const preco = 59.49;
	preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
	preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

	MATH.CEIL(), MATH.FLOOR()
	ceil() arredonda para cima, retornando sempre uma integral e floor para baixo.
		Math.ceil(4.8334); // 5
		Math.ceil(4.3); // 5
		Math.floor(4.8334); // 4
		Math.floor(4.3); // 4
```

<br/>
<br/>

> Array

<br/>

## ARRAY.FROM()
Array.from() é um método utilizado para transformar array-like objects (NodeList), em uma array.

```js
	let li = document.querySelectorAll('li'); // NodeList
	li = Array.from(li); // Array
	const carros = {
	  0: 'Fiat',
	  1: 'Honda',
	  2: 'Ford',
	  length: 4,
	}

	const carrosArray = Array.from(carros);
```

## ARRAY.ISARRAY()
Verifica se o valor passado é uma array e retorna um valor booleano.

```js
	let li = document.querySelectorAll('li'); // NodeList
	Array.isArray(li); // false

	li = Array.from(li); // Array
	Array.isArray(li); // true
```

<br/>

## [].UNSHIFT() E [].PUSH()
[].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

```js
	const carros = ['Ford', 'Fiat', 'VW'];
	carros.unshift('Honda', 'Kia'); // 5
	carros.push('Ferrari'); // 6
```

<br/>

## [].SHIFT() E [].POP()
[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

```js
	const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
	const primeiroCarro = carros.shift(); // 'Ford'

	const ultimoCarro = carros.pop(); // 'Honda'
```

<br/>

## [].SLICE()
[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

```js
	const linguagens = ['html', 'css', 'js', 'php', 'python'];
	linguagens.slice(3); // ['php', 'python']
	linguagens.slice(1, 4); // ['css', 'js', 'php']

	const cloneLinguagens = linguagens.slice(); // serve para criar uma copia para uma nova variavel sem referencia.
```

<br/>
<br/>


## [].FOREACH()

```js
[].forEach(callback(itemAtual, index, array))

	const carros = ['Ford', 'Fiat', 'Honda'];
	carros.forEach(function(item, index, array) {
	  console.log(item.toUpperCase());
	});

	// com Arrow Function
	carros.forEach((item, index, array) => {
	  console.log(item.toUpperCase());
	});
```
<br/>

## Arrow Function

```js
	const li = document.querySelectorAll('li');

	li.forEach(i => i.classList.add('ativa'));

	li.forEach(function(item) {
	  item.classList.add('ativa');
	});
```

<br/>

## [].MAP()
[].map(callback(itemAtual, index, array)) = funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

```js
	const carros = ['Ford', 'Fiat', 'Honda'];
	const newCarros = carros.map((item) => {
	  return 'Carro ' + item;
	});

	carros; // ['Ford', 'Fiat', 'Honda']
	newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 
```

<br/>

## [].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

```js
	const aulas = [10, 25, 30];
	const total1 = aulas.reduce((acumulador, atual) => {
	  return acumulador + atual;
	});
	total1; // 65

	const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
	total2; // 165
```

<br/>

## [].REDUCERIGHT()
Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

```js
	const frutas = ['Banana', 'Pêra', 'Uva'];

	const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
	const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

	frutasRight; // Uva Pêra Banana
	frutasLeft; // Banana Pêra Uva
```

<br/>

## [].SOME()
[].some(), se pelo menos um return da iteração for truthy, ele retorna true.

```js
	const frutas = ['Banana', 'Pêra', 'Uva'];
	const temUva = frutas.some((fruta) => {
	  return fruta === 'Uva';
	}); // true
```
<br/>

## [].EVERY()
[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

```js
	const frutas = ['Banana', 'Pêra', 'Uva', ''];
	// False pois pelo menos uma fruta
	// está vazia '', o que é um valor falsy
	const arraysCheias = frutas.every((fruta) => {
	  return fruta; // false
	});
```

<br/>

## [].FIND() E [].FINDINDEX()
[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

```js
	const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
	const buscaUva = frutas.findIndex((fruta) => {
	  return fruta === 'Uva'; 
	}); // 2

	const numeros = [6, 43, 22, 88, 101, 29];
	const buscaMaior45 = numeros.find(x => x > 45); // 88
```

<br/>

## [].FILTER()
[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
```js
	const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
	const arrayLimpa = frutas.filter((fruta) => {
	  return fruta; 
	}); // ['Banana', 'Uva', 'Maçã']

	const numeros = [6, 43, 22, 88, 101, 29];
	const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]
```

<br/>
<br/>

> Function

<br/>

## FUNCTION.CALL()
function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

```js
	const carros = ['Ford', 'Fiat', 'VW'];

	carros.forEach((item) => {
	  console.log(item);
	}); // Log de cada Carro

	carros.forEach.call(carros, (item) => {
	  console.log(item);
	}); // Log de cada Carro

	const frutas = ['Banana', 'Pêra', 'Uva'];

	carros.forEach.call(frutas, (item) => {
	  console.log(item);
	}); // Log de cada Fruta
```

<br/>

## ARRAY'S E CALL
É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).

```js
	Array.prototype.mostreThis = function() {
	  console.log(this);
	}

	const frutas = ['Uva', 'Maçã', 'Banana'];
	frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

	Array.prototype.pop.call(frutas); // Remove Banana
	frutas.pop(); // Mesma coisa que a função acima
```

<br/>

## ARRAY-LIKE
HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

```js
	const li = document.querySelectorAll('li');

	const filtro = Array.prototype.filter.call(li, function(item) {
	  return item.classList.contains('ativo');
	});

	filtro; // Retorna os itens que possuem ativo
```

<br/>

## UNCTION.APPLY()
O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
#################### A DIFERENÇA É QUE RECEBE UMA LISTA E O CALL NAO ##################

```js
	const numeros = [3,4,6,1,34,44,32];
	Math.max.apply(null, numeros);
	Math.max.call(null, 3, 4, 5, 6, 7, 20);

	// Podemos passar null para o valor
	// de this, caso a função não utilize
	// o objeto principal para funcionar
```

<br/>

## FUNCTION.BIND()
Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this. Permitindo assim, criar funcoes pre prontas mas sem todos os argumentos.

```js
	const li = document.querySelectorAll('li');

	const filtrarLi = Array.prototype.filter.bind(li, function(item) {
	  return item.classList.contains('ativo');
	});

	filtrarLi();
	#############################################################################
	function imc(altura, peso) {
	  return peso / (altura * altura);
	}

	const imc180 = imc.bind(null, 1.80);

	imc(1.80, 70); // 21.6
	imc180(70); // 21.6
```

<br/>
<br/>

> Object

<br/>

## Object.CREATE()

Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

```js
	const carro = {
	  rodas: 4,
	  init(marca) {
	    this.marca = marca;
	    return this;
	  },
	  acelerar() {
	    return `${this.marca} acelerou as ${this.rodas} rodas`;
	  },
	  buzinar() {
	    return this.marca + ' buzinou';
	  }
	}

	const honda = Object.create(carro);
	honda.init('Honda').acelerar();
```

<br/>

## OBJECT.ASSIGN()
Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

```js
	const funcaoAutomovel = {
	  acelerar() {
	    return 'acelerou';
	  },
	  buzinar() {
	    return 'buzinou';
	  },
	}

	const moto = {
	  rodas: 2,
	  capacete: true,
	}

	const carro = {
	  rodas: 4,
	  mala: true,
	}

	Object.assign(moto, funcaoAutomovel);
	Object.assign(carro, funcaoAutomovel);
```

<br/>

## OBJECT.DEFINEPROPERTIES()
Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

```js
	const moto = {}
	Object.defineProperties(moto, {
	  rodas: {
	    value: 2,
	    configurable: false, // impede deletar e mudança de valor
	    enumarable: true, // torna enumerável
	  },
	  capacete: {
	    value: true,
	    configurable: true,
	    writable: false, // impede mudança de valor
	  },
	})

	moto.rodas = 4;
	delete moto.capacete;
	moto;
	// {rodas: 2}
```

<br/>

## GET E SET
É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

```js
	const moto = {}
	Object.defineProperties(moto, {
	  velocidade: {
	    get() {
	      return this._velocidade;
	    },
	    set(valor) {
	      this._velocidade = 'Velocidade ' + valor;
	    }
	  },
	})

	moto.velocidade = 200;
	moto.velocidade;
	// Velocidade 200
```

<br/>

## OBJECT.GETOWNPROPERTYNAMES(OBJ)
Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

```js
	Object.getOwnPropertyNames(Array);
	// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

	Object.getOwnPropertyNames(Array.prototype);
	// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

	const carro = {
	  marca: 'Ford',
	  ano: 2018,
	}
	Object.getOwnPropertyNames(carro);
	// ['marca', 'ano']
```

<br/>

## OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

```js
	const frutas = ['Banana', 'Pêra']
	Object.getPrototypeOf(frutas);
	Object.getPrototypeOf(''); // String

	const frutas1 = ['Banana', 'Pêra'];
	const frutas2 = ['Banana', 'Pêra'];

	Object.is(frutas1, frutas2); // false
```

<br/>

## OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

```js
	const carro = {
	  marca: 'Ford',
	  ano: 2018,
	}
	Object.freeze(carro);
	Object.seal(carro);
	Object.preventExtensions(carro);

	Object.isFrozen(carro); // true
	Object.isSealed(carro); // true
	Object.isExtensible(carro); // true
```

<br/>

## {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

```js
	const frutas = ['Banana', 'Uva'];

	frutas.hasOwnProperty('map'); // false
	Array.hasOwnProperty('map'); // false
	Array.prototype.hasOwnProperty('map'); // true

	Array.prototype.propertyIsEnumerable('map'); // false
	window.propertyIsEnumerable('innerHeight'); // true
```

<br/>

## {}.ISPROTOTYPEOF(VALOR)
Verifica se é o protótipo do valor passado.

```js
	const frutas = ['Banana', 'Uva'];
	
	Array.prototype.isPrototypeOf(frutas); // true
```


> DOM

<br/>

## DATASET()

Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

```js
	<div data-anima="left" data-tempo="1000">Div 1</div>
	<div data-anima="right" data-tempo="2000">Div 2</div>

	const divs = document.querySelectorAll('[data-anima]');
	divs.forEach((div) => {
	div.classList.add(div.dataset.anima);
	});

	// adiciona em cada div
	// uma classe com o mesmo nome
	// que o valor de data
```

## MODULES ES6
Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

```js
	<script type="module" src="js/script.js"></script>

	// arquivo scroll-suave.js
	export default function scrollSuave() {
	...
	};

	// arquivo script.js
	import scrollSuave from './scroll-suave.js';

	scrollSuave();

```

## SETTIMEOUT()
setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.
<br/>
* setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.

```js
	function espera(texto) {
		console.log(texto);
	}
	setTimeout(espera, 1000, 'Depois de 1s');
```

## SETINTERVAL
setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.

```js
	function loop(texto) {
		console.log(texto);
	}
	setInterval(loop, 1000, 'Passou 1s');

	// loop a cada segundo
	let i = 0;
	setInterval(() => {
		console.log(i++);
	}, 1000);
```

## CLEARINTERVAL
clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

```js
	const contarAte10 = setInterval(callback, 1000);

	let i = 0;
	function callback() {
		console.log(i++);
		if (i > 10) {
			clearInterval(contarAte10);
		}
	}
```
