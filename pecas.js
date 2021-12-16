var listaDePeças = [ "Filtro de ar" , "Motor" , "Amortecedor" ]
if (listaDePeças.length < 4 ) {
    // é possível cadastrar
    console.log ( "É possível cadastrar mais peças." )
}else {
    // não é possível cadastrar
    console.log ( "Não é possível cadastrar mais peças." )
}
// peso mínimo de 100g
let peso = 50;
if ( peso < 100) {
    // não possui peso adequado
    console.log ('A peça deve pesar no mínimo 100g.')
}else {
    // possui o peso adequado
    console.log ('A peça possui o peso adequado')
}
// número de caracteres
let nomepeça = "Disco de Freio"
if (nomepeça.comprimento > 3) {
    console.log ('Nome da peça é adequado para o cadastro')
}else if (nomepeça.comprimento == 0) {
    console.log ('O nome da peça não pode ser vazio')
}else {
    console.log('O nome deve ter mais de 3 caracteres, digite um nome adequado')
}

switch(nomepeça.length) {
    case 0 :
        console.log ('O nome deve ter pelo menos 3 caracteres, digite um nome adequado')
    case 1 :

    case 2 :
    
    case 3 :
    
    default : 
        console.log ('O nome da peça está adequado para o cadastro!')    
    }
