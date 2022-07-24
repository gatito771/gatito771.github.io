(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
   
    //console.log(titleQuestions);

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
           // alert('auch me diste click');
            let height = 0;
            let answer = question.nextElementSibling;  //answer es el parrafo
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate'); //rota el elemento

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;  //da el alto minimo para mostrar el elemento
            }
            answer.style.height =  `${height}px`;

        });

    });

})();