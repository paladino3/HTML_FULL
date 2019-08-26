alert("Teste do documento do javaScript");

/*Função que valida o formulario de login*/

function validaLogin(){

	// Pegar os valores digitados no campo de usuario e senha
	var usuario = document.getElementById("inputUsuario").value;
	var senha = document.getElementById("inputSenha").value;
	
	//verificar se ambos os campos foram preenchidos
	//se foram preenchidos, deixa enviar o formuladorios,
	if (usuario == "" || senha == ""){
		alert("Preencha todos os campos!")
		return false;
	}else{
		return true;
	}

	//senão, avisa que tem erro e não envia o formulario!	
}

//ESTUDAR JQUERY