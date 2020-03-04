const form = document.querySelector('#loging');
const btn = document.querySelector('.primaryButton');
const name = document.querySelector('.textInput');
const password = document.querySelector('.passInput');
const msg = document.querySelector('.msg');


form.addEventListener('submit',onsubmit);


function onsubmit(e){

    e.preventDefault();

    if(name.value === '' || password.value ===''){

        msg.classList.add('error');
        msg.innerHTML = 'Please Enter Username and Password';
        setTimeout(()=>msg.remove(),3000);

    }else{

        console.log('success');
    }



}

