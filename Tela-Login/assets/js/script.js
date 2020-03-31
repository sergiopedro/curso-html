let email = 'joao@hcode.com.br'; 

email = 'galuco@hcode.com.br'

console.log(email);
console.log('O seu email é: ' + email);
console.log(`O seu email é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!')

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('Mouse está sobre o formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('Mouse está fora do formulário');
});


document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(email, password);



let json = {
    email: email,
    password: password
};

/* console.log(json);

let stringJSON = JSON.stringify(json);

console.log(stringJSON);

let jsonParse = JSON.parse(stringJSON);

console.log(jsonParse); */

if(!json.email) {
    console.log("O campo email deve ser preenchido");
} else if(!json.password) {
    console.log("O campo password deve ser preenchido")    
} else {
    console.log('Dados validados com sucesso!')
}



});