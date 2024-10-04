document.querySelector('.pararmetro-senha_botao');
const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
senha.TextContent = tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);

function diminuiTamanho() {
    if(tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.TextContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.TextContent = tamanhoSenha;
    geraSenha();
}
//código omitido
const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@*?';
geraSenha();

function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas 
    length;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = senha;
}
const checkbox = Document. querySelectorAll('.checkbox');
console.log(checkbox[0].checked);
