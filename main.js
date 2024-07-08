const form = document.querySelector('#contato')
const nomeContato = []
const telContato = []
let contatos = ''

document.addEventListener("DOMContentLoaded", function() {
    const inputNome = document.getElementById('nome')
    const telefoneInput  = document.getElementById('telefone')

    inputNome.addEventListener('input', () => {
        let valor = inputNome.value;

        inputNome.value = valor.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/g, '');
    });


    telefoneInput.addEventListener('input', () => {
        let valor = telefoneInput.value

         valor = valor.replace(/\D/g, '');

        if (valor.length > 0) {
            valor = `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7, 11)}`;
        }

        telefoneInput.value = valor;
    });

});


form.addEventListener('submit', (e) => {
    e.preventDefault()

    receberDados()  
    atualizarContatos()
})


function receberDados(){
    const inputNome = document.querySelector('#nome').value
    const inputTelefone = document.querySelector('#telefone').value

    inputTelefone.trim().value

    const nomeExiste = nomeContato.some(item => item.toLowerCase() === inputNome.toLowerCase())

    const telExiste = telContato.some(item => item === inputTelefone)

    if(nomeExiste){
        alert(`${inputNome} já foi cadastrado`)
    } else if(telExiste){
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