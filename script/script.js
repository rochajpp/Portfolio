const header = document.querySelector('header');

function activeHeaderScroll(){
    header.classList.toggle('activeHeader', scrollY > 0);
}

window.addEventListener('scroll', activeHeaderScroll);


document.querySelector('.language').onclick = function(){
    document.querySelector('body').classList.toggle('active');
}

function writerEffect(){

}
writerEffect();