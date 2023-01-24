const header = document.querySelector('header');

function activeHeaderScroll(){
    header.classList.toggle('activeHeader', scrollY > 0);
}

window.addEventListener('scroll', activeHeaderScroll);

document.querySelector('.menuButton').onclick = function(){
    document.querySelector('.contentMain').classList.toggle('menuRespActive');
}
document.querySelector('.close').onclick = function(){
    document.querySelector('.contentMain').classList.toggle('menuRespActive');
}
document.querySelector('.homeA').onclick = function(){
    document.querySelector('.contentMain').classList.toggle('menuRespActive');
}
document.querySelector('.aboutA').onclick = function(){
    document.querySelector('.contentMain').classList.toggle('menuRespActive');
}
document.querySelector('.projectsA').onclick = function(){
    document.querySelector('.contentMain').classList.toggle('menuRespActive');
}
document.querySelector('.contactsA').onclick = function(){
    document.querySelector('.contentMain').classList.toggle('menuRespActive');
}
document.querySelector('.language').onclick = function(){
    document.querySelector('body').classList.toggle('active');
}

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


window.scrl = ScrollReveal({ reset:true});
ScrollReveal({ distance: '20px' });

scrl.reveal('.apresentation', {duration: 3000});
scrl.reveal('.part2', {duration: 3000});
scrl.reveal('.part1', {duration: 3000, origin: 'left'});
scrl.reveal('.titleAbout', {duration: 3000});