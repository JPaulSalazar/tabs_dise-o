const links = document.querySelectorAll('.tab-item');
const text = document.querySelectorAll('.tabs-text-item');

for( let i = 0; i< text.length; i++){
    text[i].classList.add('hide');
}

text[0].classList.remove('hide');
links[0].classList.add('show');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', (event) =>{ 
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').substring(1);
        for( let i = 0; i < text.length; i++){
            text[i].classList.add('hide');
            if(text[i].getAttribute('id') == id){
                text[i].classList.remove('hide');
            }
        }
        for(let i = 0; i< links.length; i++){
            links[i].classList.remove('show');
        }
        event.currentTarget.classList.add('show');
    });
}

