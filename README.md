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

> List

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

<br/>
<br/>

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

<br/>

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
<br/>

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

<br/>

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

<br/>

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

<br/>

## DATE

NEW DATE() - O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

```js
	const agora = new Date();
	agora;
	// Semana Mês Dia Ano HH:MM:SS GMT
	agora.getDate() // Dia
	agora.getDay() // Dia da Semana ex: 5 = Fri
	agora.getMonth() // Número dia mês
	agora.getFullYear() // Ano
	agora.getHours() // Hora
	agora.getMinutes() // Minutos
	agora.getTime() // ms desde 1970
	agora.getUTCHours() - 3 // Brasília
```

<br/>

## GETTIME()
O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

```js
	const agora = new Date();
	agora.getTime(); //

	// total de dias desde 1 de janeiro de 1970
	const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);
```

<br/>
<br/>

> Forms

<br/>

## Formulario
É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.

```html
	<form name="contato" id="contato">
	<label for="nome">Nome</label>
	<input type="text" name="nome" id="nome">
	<label for="email">Email</label>
	<input type="email" name="email" id="email">
	<label for="mensagem">Mensagem</label>
	<textarea name="mensagem" id="mensagem"></textarea>
	</form>
```

```js
	document.forms; // lista com os formulários
	document.forms.contato; // form com nome contato
	document.forms.contato.elements; // elementos
	document.forms[0].elements[0].value; // valor do primeiro
```

<br/>

## VALUES
A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

```js
	const form = document.getElementById('contato');
	function handleKeyUp(event) {
	console.log(event.target.value);
	}
	form.addEventListener('keyup', handleKeyUp);
```

<br/>

## VALIDAÇÃO
O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')

```html
	<input type="email" name="email" id="email" required>
	<span class="erro"></span>
```
```js
	const form = document.getElementById('contato');
	function handleChange(event) {
	const target = event.target;
	if(!target.checkValidity()) {
		target.classList.add('invalido');
		target.nextElementSibling.innerText = target.validationMessage;
	} else {
		target.classList.remove('invalido');
	}
	}
	form.addEventListener('change', handleChange);
```

<br/>

## SELECT

```html
	<select name="cores" id="cores">
	<option value="black">Preto</option>
	<option value="white">Branco</option>
	<option value="blue">Azul</option>
	</select>
	<input type="color">
```

```js
	const form = document.getElementById('contato');
	function handleChange(event) {
	document.body.style.backgroundColor = event.target.value;
	}
	form.addEventListener('change', handleChange);
```

<br/>

## DIFF INPUTS
```html
	<input type="color">
	<input type="date">
	<input type="number">
	<input type="range">
	<input type="password">
```

```js
	const form = document.getElementById('contato');
	function handleChange(event) {
	console.log(event.target.value)
	}
	form.addEventListener('change', handleChange);
```

<br/>

## CHECKBOX
Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.

```html
	<label for="identidade">Possui identidade?</label>
	<input type="checkbox" value="identidade" id="identidade">
	<label for="casado">Casado?</label>
	<input type="checkbox" value="casado" id="casado">
```
```js
	const form = document.getElementById('contato');
	function handleChange(event) {
	if(event.target.checked)
		console.log(event.target.value);
	}
	form.addEventListener('change', handleChange);
```

<br/>

## GETTING VALUES
Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.

```html
	<form name="contato" id="contato">
	<label for="nome">Nome</label>
	<input type="text" name="nome" id="nome">
	<label for="email">Email</label>
	<input type="email" name="email" id="email">
	<label for="mensagem">Mensagem</label>
	<textarea name="mensagem" id="mensagem"></textarea>
	</form>
```

```js
	const form = document.getElementById('contato');
	const dados = {};
	function handleChange(event) {
	dados[event.target.name] = event.target.value;
	}
	form.addEventListener('change', handleChange);
```

<br/>

## LocalStorage

Além de existir a sessão para armazenamento de dados, existe o local para realizar a mesma função com a diferença de que os dados são excluidos somente se o usuário realizar a limpeza dos dados no navegador.

```js
	localStorage.nome = 'Thiago'
	localStorage[nome]
	localStorage.set('key', 'value')
	localStorage.get('key')
```

<br/>
<br/>

> ASync

<br/>

## PROMISE()
Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

```js
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: undefined}
```

<br/>

## RESOLVE()
Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

```js
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: "Estou pronto!"}

```

<br/>

## REJECT()
Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

```js
const promessa = new Promise(function(resolve, reject) {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

console.log(promessa); // Promise {<rejected>: Error:...}
```

<br/>

## THEN()
O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

```js
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(function(resolucao) {
  console.log(resolucao); // 'Estou pronto!'
});
```

<br/>

## ASSÍNCRONO
As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.

```js
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolvida');
  }, 1000);
});

promessa.then(resolucao => {
  console.log(resolucao); // 'Resolvida' após 1s
});
```

<br/>

## CATCH()
O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

```js
const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}).catch(reject => {
  console.log(reject);
});
```

<br/>

## THEN(RESOLVE, REJECT)
Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento.

```js
const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
});
```

<br/>

## FINALLY()
finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

```js
const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
}).finally(() => {
  console.log('Acabou'); // 'Acabou'
});
```

<br/>

## PROMISE.ALL()
Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.

```js
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});
```

<br/>

## PROMISE.RACE()
Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.

```js
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});
```

<br/>

## FETCH API
Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

```js
fetch('./arquivo.txt').then(function(response) {
  console.log(response); // Response HTTP (Objeto)
});
```

<br/>

## RESPONSE
O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.

```js
fetch('./arquivo.txt').then(function(response) {
  return response.text();
}).then(function(corpo) {
  console.log(corpo);
});
```

<br/>

## .JSON()
Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.

```js
fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro);
});
```

<br/>

## .TEXT()
Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

```js
const styleElement = document.createElement('style');

fetch('./style.css')
.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  document.body.appendChild(styleElement);
});
```

<br/>

## .BLOB()
Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.

```js
const div = document.createElement('div');

fetch('./imagem.png')
.then(response => response.blob())
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  console.log(blobUrl);
});
```

<br/>

## .CLONE()
Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.

```js
const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});
```

<br/>

## .STATUS E .OK
Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

```js
const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
});
```

<br/>

## .URL E .TYPE
.url retorna o url da requisição. .type retorna o tipo da reposta.

```js
const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites
```

<br/>

## JSON.PARSE() E JSON.STRINGIFY()
JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.

```js
const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);

```

<br/>

## API
	Application

	Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, estamos utilizando a API do browser para se comunicar com a API do servidor.

	Programming

	Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo.

	Interface

	A interface são os comandos criados para permitir a interação com a aplicação. Ex: 'VIOLAO'.toLowerCase() é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito / resposta.]

<br/>

## URL E METHOD
Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

```js
const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '"aula": "JavaScript"',
}

fetch(url, options);
.then(response => response.json())
.then(json => {
  console.log(json);
});
```
<br/>

## ASYNC / AWAIT
A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.

```js
async function puxarDados() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  
  document.body.innerText = dadosJSON.titulo;
}

puxarDados();

```

<br/>

## TRY / CATCH
Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

```js
async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
  }
  catch(erro) {
    console.log(erro);
  }
}
puxarDados();

```

<br/>

## HISTORY
É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.

```js
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima
```

<br/>

## PUSHSTATE()
A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).

```js
// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title ainda é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.

window.history.pushState(null, null, 'sobre.html');
```

<br/>

## POPSTATE
O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.

```js
window.addEventListener('popstate', () => {
  fetchPage(window.location.pathname);
});
```

<br/>
<br/>

> Mais Javascript

<br/>

## Factory Function
São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.

```js
	function createButton(text) {
		function element() {
			const buttonElement = document.createElement('button');
			buttonElement.innerText = text;
			return buttonElement;
		}
		return {
			element: element,
			text: text,
		}
		}

	const comprarBtn = createButton('Comprar');

```

<br/>

## Ice Factory

Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.

```js
	'use strict';

	function criarPessoa(nome, sobrenome) {
	const nomeCompleto = `${nome} ${sobrenome}`;
	function andar() {
		return `${nomeCompleto} andou`;
	}
	return Object.freeze({
		nome,
		sobrenome,
		andar,
	});
	}

	const designer = criarPessoa('André', 'Rafael');

```

<br/>

## Constructor Function / Factory Function

Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.

```js
	function Pessoa(nome) {
	if (!(this instanceof Pessoa)) // ou (!new.target)
		return new Pessoa(nome);
	this.nome = nome;
	}

	Pessoa.prototype.andar = function() {
	return `${this.nome} andou`;
	}

	const designer = Pessoa('André');
```

<br/>

## Closures

A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo dá acesso ao item2, esse escopo é chamado de Clojure (funcao1) (escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.

```js
	let item1 = 1;
	function funcao1() {
	let item2 = 2;
	function funcao2() {
		let item3 = 3;
		console.log(item1);
		console.log(item2);
		console.log(item3);
	}
	funcao2();
	}
```

Outro exemplo de caso real:

```js
	function contagem() {
		let total = 0;
		return function incrementar() {
			total++;
			console.log(total);
		}
	}

	const ativarIncrementar = contagem();
	ativarIncrementar(); // 1
	ativarIncrementar(); // 2
	ativarIncrementar(); // 3

```

<br/>

## Debugging

É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.

```js
	debugger; // adicione a palavra debugger
	let item1 = 1;
	function funcao1() {
	let item2 = 2;
	function funcao2() {
		let item3 = 3;
		console.log(item1);
		console.log(item2);
		console.log(item3);
	}
	funcao2();
	}

```

<br/>

## Destructuring

Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.

```js
	const cliente = {
	nome: 'Andre',
	compras: {
		digitais: {
		livros: ['Livro 1', 'Livro 2'],
		videos: ['Video JS', 'Video HTML']
		},
		fisicas: {
		cadernos: ['Caderno 1']
		}
	}
	}

	console.log(cliente.compras.digitais.livros);
	console.log(cliente.compras.digitais.videos);

	const {livros, videos} = cliente.compras.digitais;

	console.log(livros);
	console.log(videos);
```

Outros exemplos:

```js
	const cliente = {
		nome: 'Andre',
		compras: 10,
	}

	const {nome, compras} = cliente;
	// ou
	const {nome: nomeCliente, compras: comprasCliente} = cliente;

```

```js
	const frutas = ['Banana', 'Uva', 'Morango'];

	const primeiraFruta = frutas[0];
	const segundaFruta = frutas[1];
	const terceiraFruta = frutas[2];

	// Com destructuring
	const [primeira, segunda, terceira] = frutas;
```

```js
	const primeiro = 'Item 1';
	const segundo = 'Item 2';
	const terceiro = 'Item 3';
	// ou
	const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 
```

<br/>

## Nesting

É possível aninhar uma desestruturação dentro de outra.

```js
	const cliente = {
		nome: 'Andre',
		compras: {
			digitais: {
			livros: ['Livro 1', 'Livro 2'],
			videos: ['Video JS', 'Video HTML']
			},
			fisicas: {
			cadernos: ['Caderno 1']
			}
		}
	}

	const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

	console.log(fisicas);
	console.log(livros);
	console.log(videos);
	console.log(digitais);
```

<br/>

## Parâmetro Padrão (Default) ES6+

Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.

```js
	function perimetroForma(lado, totalLados = 4) {
		return lado * totalLados;
	}

	perimetroForma(10, 5); // 50
	perimetroForma(10); // 40

```

<br/>

## Arguments

A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.

```js
	function perimetroForma(lado, totalLados = 4) {
	console.log(arguments)
	return lado * totalLados;
	}

	perimetroForma(10);
	perimetroForma(10, 4, 20);
```

<br/>

## Parâmetro Rest

É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

```js
	function anunciarGanhadores(...ganhadores) {
		ganhadores.forEach(ganhador => {
			console.log(ganhador + ' ganhou.')
		});
	}

	anunciarGanhadores('Pedro', 'Marta', 'Maria');
```

<br/>

## Único Rest

Só é possível ter um único parâmetro rest e ele deve ser o último.

```js
	function anunciarGanhadores(premio, ...ganhadores) {
		ganhadores.forEach(ganhador => {
			console.log(ganhador + ' ganhou um ' + premio)
		});
	}

	anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');
```

<br/>

## Rest vs Arguments

Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.

```js
	function anunciarGanhadores(premio, ...ganhadores) {
	console.log(ganhadores);
	console.log(arguments);
	}

	anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');
```

<br/>

## Operador Spread

Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

```js
	const frutas = ['Banana', 'Uva', 'Morango'];
	const legumes = ['Cenoura', 'Batata'];

	const comidas = [...frutas, 'Pizza', ...legumes];
```

<br/>

## Spread Argument

O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.

```js
	const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

	const listaNumeros = [1,13,21,12,55,2,3,43];
	const numeroMaximoSpread = Math.max(...listaNumeros);
```

<br/>

## Transformar em Array

É possível transformar itens iteráveis em uma array real com o spread.

```js
	const btns = document.querySelectorAll('button');
	const btnsArray = [...btns];

	const frase = 'Isso é JavaScript';
	const fraseArray = [...frase];
```

<br/>

## Spread e for...of

Com o for loop podemos manipular cada um dos elementos do objeto iterável. * O for...of não irá funcionar em um objeto comum que não seja iterável.

```js
	const buttons = document.querySelectorAll('button');

	for(const btn of buttons) {
	btn.style.background = 'blue';
	}

	console.log(...buttons);
```

<br/>

## for...in

Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

```js
	const carro = {
	marca: 'Honda',
	ano: 2018,
	}

	for(const propriedade in carro) {
	console.log(propriedade);
	}
```

<br/>

## Arrays e for...in

Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.

```js
	const frutas = ['Banana', 'Morango', 'Uva'];

	for(const index in frutas) {
		console.log(index);
	}

	for(const index in frutas) {
		console.log(frutas[index]);
	}
```

<br/>

## Chave e Valor

Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.

```js
	const btn = document.querySelector('button');
	const btnStyles = getComputedStyle(btn);

	for(const style in btnStyles) {
		console.log(`${style}: ${btnStyles[style]}`);
	}
```


<br/>
<br/>

> Regular Expression

<br/>

## Regexr

https://regexr.com/

## Regular Expression

Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

```js
	// Procura: a
	const padraoRegexp = /a/;

	const texto = 'JavaScript';
	const novoTexto = texto.replace(padraoRegexp, 'B');
	// JBvaScript
```

<br/>

## Flag: g

As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

```js
	// Procura: Todo a
	const regexp = /a/g;

	'JavaScript'.replace(regexp, 'i');
	// JiviScript

```

<br/>

## Flag: i

Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

```js
	// Procura: Todo PE, Pe, pE e pe
	const regexp = /Pe/gi;

	'Perdeu perdido'.replace(regexp, 'Ba');
	// Bardeu Bardido
```

<br/>

## Negar

Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

```js
	// Procura: tudo que não estiver entre a e z
	const regexp = /[^a-z]/g;

	'Brasil é com z: Brazil'.replace(regexp, ' ');
	// rasil   com z   razil 
```

<br/>

## Escapar Especiais

Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

```js
	// Procura: todos os pontos
	const regexp = /\./g;
	const regexpAlternativa = /[.]/g;

	'999.222.222.11'.replace(regexp, '-');
	// 999-222-222-11
```

<br/>

## Word

O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

```js
	// Procura: todos os alfanuméricos
	const regexp = /\w/g;

	'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
	// ------------ -$ --,--.
```

<br/>

## Digit

O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].


```js
	// Procura: todos os dígitos
	const regexp = /\d/g;

	'+55 (21) 2222-2222'.replace(regexp, 'X');
	// +XX (XX) XXXX-XXXX.
```

<br/>

## Mais +

O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

```js
	// Procura: dígitos em ocorrência de um ou mais
	const regexp = /\d+/g;

	'222.333.222.42'.replace(regexp, 'X');
	// X.X.X.X

	// Procura: Começa com d, seguido por uma ou mais letras.
	const regexpLetras = /d\w+/g;

	'Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras, 'X');
	// Dígitos, X, X, Dito, d
```

<br/>

## Asterisco *

O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.

```js
	// Procura: Começa com d, seguido por zero ou mais letras.
	const regexp = /d\w*/g;

	'Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X');
	// Dígitos, X, X, Dito, X
```

<br/>

## Opcional ?

O sinal ? significa que o caracter é opcional, pode ou não existir.

```js
	// Procura: Por regex com p opcional
	const regexp = /regexp?/g;

	'Qual é o certo, regexp ou regex?'.replace(regexp, 'Regular Expression');
	// Qual é o certo, Regular Expression ou Regular Expression?
```

<br/>

## Alternado |

O sinal | irá selecionar um ou outro. java|php

```js
	// Procura: java ou php (case insensitive)
	const regexp = /java|php/gi;

	'PHP e Java são linguagens diferentes'.replace(regexp, 'X');
	// X e X são linguagens diferente
```

<br/>

## Anchor Beginning

Com o ^ é possível informar que a busca deve ser iniciada no início da linha.

```js
	// Procura: sequência de alfanuméricos
	// no início da linha.
	const regexp = /^\w+/g;

	`andre@origamid.com
	contato@origamid.com`.replace(regexp, 'X');
	// X@origamid.com
	// contato@origamid.com
```

<br/>

## Referência da Seleção

É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.

```js
	// Procura: Java
	const regexp = /Java/g;

	'PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script');
	// PHP e --JavaScript são linguagens diferentes
	// $& será igual à Java
```

<br/>

## Grupo de Captura

É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.

```js
	// Procura: sequência alfanumérica, seguida
	// de , seguido espaço de sequência alfanumérica.
	const regexp = /(\w+),\s(\w+)/g;

	'Rafael, Andre'.replace(regexp, '$2 $1');
	// Andre Rafael
```

<br/>

## Regexp Constructor

Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

```js
	const regexp = /\w+/gi;

	// Se passarmos uma string, não precisamos dos //
	// e devemos utilizar \\ para meta characters, pois é necessário
	// escapar a \ especial. As Flags são o segundo argumento
	const regexpObj1 = new RegExp('\\w+', 'gi');
	const regexpObj2 = new RegExp(/\w+/, 'gi');

	'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
	// X X X

	// Exemplo complexo:
	const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
	const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');
```

<br/>

## regexp.test()

O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

```js
	const regexp = /Java/g;
	const frase = 'JavaScript e Java';

	regexp.lastIndex; // 0
	regexp.test(frase); // true
	regexp.lastIndex; // 4
	regexp.test(frase); // true
	regexp.lastIndex; // 17
	regexp.test(frase); // false
	regexp.lastIndex; // 0
	regexp.test(frase); // true (Reinicia
	regexp.lastIndex;  // 4
```

<br/>

## regexp.exec()

O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.

```js
	const regexp = /\w{2,}/g;
	const frase = 'JavaScript, TypeScript e CoffeeScript';

	regexp.exec(frase);
	// ["JavaScript", index: 0, input: "JavaScript,
	// TypeScript e CoffeeScript", groups: undefined] 
	regexp.exec(frase);
	// ["TypeScript", index: 12, input: "JavaScript,
	// TypeScript e CoffeeScript", groups: undefined] 
	regexp.exec(frase);
	// ["CoffeeScript", index: 25, input: "JavaScript,
	// TypeScript e CoffeeScript", groups: undefined] 
	regexp.exec(frase);
	// null
	regexp.exec(frase); // Reinicia
	// ["JavaScript", index: 0, input: "JavaScript,
	// TypeScript e CoffeeScript", groups: undefined] 
```

<br/>
<br/>

> 

<br/>

## 