const form = document.querySelector('#contato')
const nomeContato = []
const telContato = []
let contatos = ''

form.addEventListener('submit', (e) => {
    e.preventDefault()

    receberDados()  
    atualizarContatos()
})


// Codigo 
document.addEventListener("DOMContentLoaded", function() {
    let inputNome = document.getElementById('nome');

    
    inputNome.addEventListener('input', function() {
        var valor = this.value;
        var regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/;

        if (regex.test(valor)) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Este campo deve conter apenas letras e espaços.');
        }
    });


});

function receberDados(){
    const inputNome = document.querySelector('#nome').value
    const inputTelefone = document.querySelector('#telefone').value

    if(nomeContato.includes(inputNome)){
        alert(`${inputNome} já foi cadastrado`)
    } else if(telContato.includes(inputTelefone)){
        alert(`Telefone: ${inputTelefone} já foi cadastrado`)
    } else{
        nomeContato.push(inputNome)
        telContato.push(inputTelefone)
       
        let contato = `<tr>
                            <td>${inputNome}</td>
                            <td>${inputTelefone}</td>
                        </tr>
                        `
        contatos += contato
    }
        
}

function atualizarContatos(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = contatos
}