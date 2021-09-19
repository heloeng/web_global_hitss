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

	document.body.querySelector ('#nome').innerHTML = ('\n Nome : ')+ localStorage.getItem('Nome');
    document.body.querySelector('#rg').innerHTML = ('\n RG : ')+ localStorage.getItem('RG');

	document.body.querySelector('#cpf').innerHTML = ('\n CPF : ')+ localStorage.getItem('CPF');
	document.body.querySelector('#telefone').innerHTML = ('\n Telefone : ')+ localStorage.getItem('Telefone');
	
    document.body.querySelector('#nascimento').innerHTML = ('\n Nascimento : ')+ dataNascimento;
	document.body.querySelector('#idade').innerHTML =('\n Idade: ')+ idade + ('\n Anos');
	
	
	//as variáveis da linha 28 a 34  estão fora do padrão das outras variáveis, porque o código descrito no html foi retirado
	//do site via rápido e contém configurações que não permitem alterar a nomenclatura.
	
	document.body.querySelector('#Cep').innerHTML = ('\n CEP : ')+ localStorage.getItem('CEP');
	document.body.querySelector('#Rua').innerHTML = ('\n Rua : ')+  localStorage.getItem('RUA');
	document.body.querySelector('#Numero').innerHTML =('\n Numero : ')+ localStorage.getItem('NUMERO');
	document.body.querySelector('#Bairro').innerHTML = ('\n Bairro : ')+ localStorage.getItem('BAIRRO');
	document.body.querySelector('#Cidade').innerHTML = ('\n Cidade : ')+ localStorage.getItem('CIDADE');

	document.body.querySelector('#estado').innerHTML = ('\n Estado : ')+ localStorage.getItem('Estado');


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
	let check = validaCPF(param);
	let elemento = document.getElementById("cpf");
 
	if (check == false) {
	   elemento.classList.add("border-danger");
 
	} else if (check == null) {
	   elemento.classList.remove("border-danger");
	   elemento.classList.remove("border-success");
 
	} else {
	   elemento.classList.remove("border-danger");
	   elemento.classList.add("border-success");
	}
 }
 
 
 let validaCPF = (strCPF) => {
	let Soma;
	let Resto;
	Soma = 0;
 
	if (strCPF == "") return null;
	if (strCPF == "00000000000") return false;
 
 
	for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
 
	if ((Resto == 10) || (Resto == 11)) Resto = 0;
	if (Resto != parseInt(strCPF.substring(9, 10))) return false;
 
	Soma = 0;
	for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;
 
	if ((Resto == 10) || (Resto == 11)) Resto = 0;
	if (Resto != parseInt(strCPF.substring(10, 11))) return false;
	return true;
 }

