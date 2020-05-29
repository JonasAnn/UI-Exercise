const label = document.querySelectorAll('.form__label');
const labelHolder = document.querySelectorAll('.full--width');
const labelHold = document.querySelectorAll('.half--width');

const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    input.addEventListener('focus', function(e){
        if(e.target.parentElement.classList.contains('form__label--holder')){
            if(e.target.parentElement.children[0].classList.contains('form__label')){
                e.target.parentElement.children[0].classList.add('hide');
            }
            if(e.target.parentElement.children[1].classList.contains('form__label')){
                e.target.parentElement.children[1].classList.add('hide'); 
            }
        }
       
    })
    input.addEventListener('focusout', function(e){
        if(e.target.parentElement.classList.contains('form__label--holder')){
            if(e.target.parentElement.children[0].classList.contains('form__label')){
                e.target.parentElement.children[0].classList.remove('hide');
            }
            if(e.target.parentElement.children[1].classList.contains('form__label')){
                e.target.parentElement.children[1].classList.remove('hide'); 
            }
        }
       
    })
});

