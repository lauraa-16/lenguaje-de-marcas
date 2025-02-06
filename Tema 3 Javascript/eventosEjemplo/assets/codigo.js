//método 1
const p1 = document.querySelector('.niidea');
p1.addEventListener('click', () => alert('Parrafo 1click'));{}


//método 2
const b = document.querySelector('body');

b.addEventListener("Load", mensaje());

function mensaje(){
    alert('Página cargada');
};

//método 3
const p2 = document.querySelector('.niidea2');
p2.addEventListener('dblclick', () => alert('Parrafo 2 click'));{}