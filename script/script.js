function adicionar() {
	localStorage.setItem('Nome', nome.value);
	localStorage.setItem('RG', rg.value);
	localStorage.setItem('CPF', cpf.value);
	localStorage.setItem('Nascimento', nascimento.value);
	localStorage.setItem('Telefone', telefone.value);
	localStorage.setItem('CEP', cep.value);
	localStorage.setItem('RUA', rua.value);
	localStorage.setItem('NUMERO', numero.value);
	localStorage.setItem('BAIRRO', bairro.value);
	localStorage.setItem('CIDADE', cidade.value);
	localStorage.setItem('Estado', estado.value);
}

function imprimir() {
	let dataNascimento = localStorage.getItem('Nascimento').split('-').reverse().join('/');
	let idade = calculaIdade(dataNascimento);

	document.body.querySelector('#nome').innerHTML = '\n Nome : ' + localStorage.getItem('Nome');
	document.body.querySelector('#rg').innerHTML = '\n RG : ' + localStorage.getItem('RG');
	document.body.querySelector('#cpf').innerHTML = '\n CPF : ' + localStorage.getItem('CPF');
	document.body.querySelector('#telefone').innerHTML = '\n Telefone : ' + localStorage.getItem('Telefone');
	document.body.querySelector('#nascimento').innerHTML = '\n Nascimento : ' + dataNascimento;
	document.body.querySelector('#idade').innerHTML = '\n Idade: ' + idade + '\n Anos';

	//as variáveis da linha 35 a 40  estão fora do padrão das outras variáveis, porque o código descrito no html foi retirado
	//do site via rápido e contém configurações que não permitem alterar a nomenclatura.

	document.body.querySelector('#Cep').innerHTML = '\n CEP : ' + localStorage.getItem('CEP');
	document.body.querySelector('#Rua').innerHTML = '\n Rua : ' + localStorage.getItem('RUA');
	document.body.querySelector('#Numero').innerHTML = '\n Numero : ' + localStorage.getItem('NUMERO');
	document.body.querySelector('#Bairro').innerHTML = '\n Bairro : ' + localStorage.getItem('BAIRRO');
	document.body.querySelector('#Cidade').innerHTML = '\n Cidade : ' + localStorage.getItem('CIDADE');
	document.body.querySelector('#estado').innerHTML = '\n Estado : ' + localStorage.getItem('Estado');
}

function calculaIdade(dataNascimento) {
	let dataSplitada = dataNascimento.split('/'); //13 11 1992
	let diaNascimento = parseInt(dataSplitada[0]);
	let mesNascimento = parseInt(dataSplitada[1]);
	let anoNascimento = parseInt(dataSplitada[2]);

	var data = new Date();

	var diaAtual = parseInt(String(data.getDate()).padStart(2, '0'));
	var mesAtual = parseInt(String(data.getMonth() + 1).padStart(2, '0'));
	var anoAtual = data.getFullYear();

	if (mesAtual == mesNascimento) {
		if (diaAtual >= diaNascimento) {
			return anoAtual - anoNascimento;
		} else {
			return anoAtual - anoNascimento - 1;
		}
	} else if (mesAtual > mesNascimento) {
		return anoAtual - anoNascimento;
	} else {
		return anoAtual - anoNascimento - 1;
	}
}

//Validação de CPF

let chamaValidaCPF = (param) => {
	exp = /\.|-/g;
	param = param.toString().replace(exp, '');
	let check = validaCPF(param);
	let elemento = document.getElementById('cpf');
	let button = document.querySelector('#btnAdicionar');

	if (check == false) {
		elemento.classList.add('border-danger');
		button.disabled = true;
	} else if (check == null) {
		elemento.classList.remove('border-danger');
		elemento.classList.remove('border-success');
		button.disabled = true;
	} else {
		elemento.classList.remove('border-danger');
		elemento.classList.add('border-success');
		if (button.disabled == null || button.disabled == true) {
			button.disabled = false;
		}
	}
};

let validaCPF = (strCPF) => {
	let Soma;
	let Resto;
	Soma = 0;

	if (strCPF == '') return null;
	if (strCPF == '00000000000') return false;

	for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;

	if (Resto == 10 || Resto == 11) Resto = 0;
	if (Resto != parseInt(strCPF.substring(9, 10))) return false;

	Soma = 0;
	for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;

	if (Resto == 10 || Resto == 11) Resto = 0;
	if (Resto != parseInt(strCPF.substring(10, 11))) return false;
	return true;
};

//Validação de telefone
let chamaValidaTel = (tel) => {
	var tel = tel.replace(/\D/g, '');

	let tel1 = tel.length;
	let check1 = validaTel(tel1);
	let elemento1 = document.getElementById('telefone');
	let button = document.querySelector('#btnAdicionar');

	if (check1 == false) {
		elemento1.classList.add('border-danger');
		button.disabled = true;
	} else if (check1 == null) {
		elemento1.classList.remove('border-danger');
		elemento1.classList.remove('border-success');
		button.disabled = true;
	} else {
		elemento1.classList.remove('border-danger');
		elemento1.classList.add('border-success');
		if (button.disabled == true || button.disabled == null) {
			button.disabled = false;
		}
	}
};

let validaTel = (tel1) => {
	if (tel1 == '') return null;
	if (tel1 == '00000000000') return false;

	if (tel1 == 11 || tel1 == 10) {
		return true;
	} else {
		return false;
	}
};

function valid(valor) {
	pesquisacep(valor);
	chamaValidaCEP(valor);
}

//Validação do CEP

let chamaValidaCEP = (cep) => {
	var cep = cep.replace(/\D/g, '');

	let cep1 = cep.length;
	console.log(cep1);
	let check2 = validaCEP(cep1);
	let elemento2 = document.getElementById('cep');
	let button = document.querySelector('#btnAdicionar');

	if (check2 == false) {
		elemento2.classList.add('border-danger');
		button.disabled = true;
	} else if (check2 == null) {
		elemento2.classList.remove('border-danger');
		elemento2.classList.remove('border-success');
		button.disabled = true;
	} else {
		elemento2.classList.remove('border-danger');
		elemento2.classList.add('border-success');
		if (button.disabled == true || button.disabled == null) {
			button.disabled = false;
		}
	}
};

let validaCEP = (cep1) => {
	if (cep1 == '') return null;
	if (cep1 == '000000000') return false;

	if (cep1 == 8) {
		return true;
	} else {
		return false;
	}
};
