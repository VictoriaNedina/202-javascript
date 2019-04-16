// if(condição){codigo}
// if (se) else (se não)
//else if (?)
//while (enquanto)
alert("Seja bem-vindo!");
let nome = prompt('Digite seu nome');
let senhaCadastrada = "perdimeuchinelo";
let senhaEntrada = prompt('Digite sua senha');

if (senhaCadastrada === senhaEntrada) {
    alert("Senha correta");
    let saldo = 300;
    let limiteDiario = 200;
    let valorSaque = prompt('Olá ' + nome + '. Digite o valor do saque.');
    let novoSaldo = saldo - valorSaque;
    if (limiteDiario >= valorSaque) {
        if (valorSaque <= saldo) {
            alert("Saque aprovado! Seu novo saldo é: R$" + novoSaldo + ".");
        }
        else {
            alert('Você é pobre pra caralho! Clique aqui para virar traficante')
        }
    }
    else {
        alert("Saque maior que seu limite diário");
    }
}
else {
    alert("Senha incorreta");
}
