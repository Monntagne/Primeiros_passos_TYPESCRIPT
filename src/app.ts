// Importar a interface Usuario do arquivo 
import { Usuario } from "./usuario";


//Funcção reponsável para simular o cadastro de um usuario

function cadastrarUsuario(usuario:Usuario):void{
    console.log("Usuario cadastrado com sucesso ")
    console.log(usuario)
}



const novoUsuario: Usuario = {
     nome: "Vinicius",
    email: "silvasantosviniccius@gmail.com",
    idade: 26,
    ativo: true
}

cadastrarUsuario(novoUsuario);