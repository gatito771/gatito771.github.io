(function(){
    const openButton = document.querySelector('.nav__menu');      //es el icono hamburguesa
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');



    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');

    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    //menu.classList.toggle()         quita el elemento 'nav__link--show' y si no la tengo la va agregar y si la tiene la quita, en este caso no se necesita 

})();