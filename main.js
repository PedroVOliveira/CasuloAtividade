const inputElement = document.querySelector('#formulario input');
const buttonElement = document.querySelector('#formulario button');
buttonElement.addEventListener('click', valor =>{
    valor = inputElement.value;

    switch (valor) {
        case '1':
            alert('casa de aries');
            break;
        case '2': 
            alert('casa de touro');
            break;
        case '3':
            alert('casa de geminni');
        case '4':
            alert('casa de cancer');
        case '5':
            alert('casa de leão');
        case '6':
            alert('casa de virgem');
        case '7':
            alert('casa de libra');   
        case '8':
            alert('casa de escorpião');               
        case '9':
            alert('casa de sargitário');
        case '10':
            alert('casa de capricornio'); 
        case '11':
            alert('casa de aquário'); 
        case '12':
            alert('casa de peixes');   
        default:
            alert('Digite um número de 1 e 12');    
    } 

    /*if(valor == 1){
        alert('casa de aries');
    }
    if(valor == 2){
        alert('casa de touro');
    }
    if(valor == 3){
        alert('casa de geminni');
    }
    if(valor == 4){
        alert('casa de cancer');
    }
    if(valor == 5){
        alert('casa de leão');
    }
    if(valor == 6){
        alert('casa de virgem');
    }
    if(valor == 7){
        alert('casa de libra');
    }
    if(valor == 8){
        alert('casa de escorpião');
    }
    if(valor == 9){
        alert('casa de sargitário');
    }
    if(valor == 10){
        alert('casa de capricornio');
    }
    if(valor == 11){
        alert('casa de aquário');
    }
    if(valor == 12){
        alert('casa de peixes');
    }
    else if(valor>12 || valor<1){
        alert('Digite um número de 1 a 12');
    } */
});


