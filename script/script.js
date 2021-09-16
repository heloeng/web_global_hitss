function adicionar() {
	localStorage.setItem('NOME', nome.value);
	localStorage.setItem('RG', rg.value);
	localStorage.setItem('CPF', txtCPF.value);
	localStorage.setItem('NASCIMENTO', txtNascimento.value);
	localStorage.setItem('TELEFONE', telefone.value);
	localStorage.setItem('CEP', cep.value);
	localStorage.setItem('RUA', rua.value);
	localStorage.setItem('NUMERO', numero.value);
	localStorage.setItem('BAIRRO', bairro.value);
	localStorage.setItem('CIDADE', cidade.value);
	localStorage.setItem('ESTADO', estado.value);
}

function imprimir() {
	let dataNascimento = localStorage.getItem('NASCIMENTO').split('-').reverse().join('/');
	let idade = calculaIdade(dataNascimento);


	document.body.querySelector('#Nome').innerHTML = localStorage.getItem('NOME');
    document.body.querySelector('#Rg').innerHTML = localStorage.getItem('RG');
	document.body.querySelector('#cpf').innerHTML = localStorage.getItem('CPF');
	document.body.querySelector('#Telefone').innerHTML = localStorage.getItem('TELEFONE');
	
    document.body.querySelector('#Nascimento').innerHTML = dataNascimento;
	document.body.querySelector('#idade').innerHTML = idade;
	
	document.body.querySelector('#Cep').innerHTML = localStorage.getItem('CEP');
	document.body.querySelector('#Rua').innerHTML = localStorage.getItem('RUA');
	document.body.querySelector('#Numero').innerHTML = localStorage.getItem('NUMERO');
	document.body.querySelector('#Bairro').innerHTML = localStorage.getItem('BAIRRO');
	document.body.querySelector('#Cidade').innerHTML = localStorage.getItem('CIDADE');
	document.body.querySelector('#Estado').innerHTML = localStorage.getItem('ESTADO');

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

