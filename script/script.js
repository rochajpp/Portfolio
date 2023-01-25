const header = document.querySelector('header');

function activeHeaderScroll(){
    header.classList.toggle('activeHeader', scrollY > 0);
}

window.addEventListener('scroll', activeHeaderScroll);


function typeWriter(element){
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    setTimeout(function(){
        textArray.forEach((letra, i) => { //Para cada elemento um index
            setTimeout(function(){
                element.innerHTML += letra
            }, 75 * i)
        })
    }, 2000)
}

typeWriter(document.querySelector('#writer'));


