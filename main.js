const buttonElement = document.querySelector('.btn');
const imgs = document.querySelectorAll('.card-image');
const inputElement = document.querySelector('input');


function showImgs(index){
    //valor recebido do input
    index = inputElement.value;
    console.log(index);
    if(index>=1 && index<=12){
    imgs.forEach((element)=>{
        // remove a classe ativo dos itens
        element.classList.remove('ativo');
    });
    //Adiciona a classe ativo no item desejado//
    imgs[index - 1 ].classList.add('ativo');
    } else{
        alert('digite um número de 1 a 12');
    }
    
}


buttonElement.addEventListener('click',showImgs);

const ulCircles = document.querySelector(".stars");

//Remove a scrollbar no inicio da animação dos círculos.
ulCircles.addEventListener("animationstart", event => {
    document.querySelector("body").style.overflow = "hidden";
});

for (let i = 0; i < 50; i++) {
    const li = document.createElement('li');

    //Constante para a variação dos valores.
    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(3, 5)); //Cria os tamanhos variados dos círculos.
    const position = random(1, 95); //Modifica aleatoriamente as possições entre 1 e 95.
    const delay = random(5, 0.1); //Gera um atraso para a movimentação dos círculos.
    const duration = random(24, 12); //Define aleatoriamente o tempo de duração do efeito.

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`; //Recebe um valor negativo para não ser gerado no campo de visão da window.

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulCircles.appendChild(li); //Necessário para diferenciar cada elemento da lista (li).
}