function adicionar() {
	localStorage.setItem('Nome', txtNome.value);
	localStorage.setItem('Email', txtEmail.value);
	localStorage.setItem('Nascimento', txtNascimento.value);
	localStorage.setItem('Estado', txtEstado.value);
}

function imprimir() {
	let dataNascimento = localStorage.getItem('Nascimento').split('-').reverse().join('/');
	let idade = calculaIdade(dataNascimento);

	document.body.querySelector('#nome').innerHTML = localStorage.getItem('Nome');
	document.body.querySelector('#email').innerHTML = localStorage.getItem('Email');
	document.body.querySelector('#nascimento').innerHTML = dataNascimento;
	document.body.querySelector('#idade').innerHTML = idade;
	document.body.querySelector('#estado').innerHTML = localStorage.getItem('Estado');
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
		idadeFinal = anoAtual - anoNascimento - 1;
		console.log(typeof idadeFinal);
		return idadeFinal;
	}
}

if (typeof Storage !== 'undefined') {
} else {
}