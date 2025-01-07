alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//enquanto
//!= significa diferente
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se e se não
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas= tentativas + 1
        tentativas++;
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o numero secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1 ){
  //  alert(`Isso ai! você descobriu o numero secreto: ${numeroSecreto} com ${tentativas} tentativas`);
//}else{
  //  alert(`Isso ai! você descobriu o numero secreto: ${numeroSecreto} com ${tentativas} tentativa`);
//}


