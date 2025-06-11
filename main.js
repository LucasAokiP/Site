const limparFormulario = () => {
    document.getElementById('Rua').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Uf').value = '';
};

const preencherFormulario = (endereco) => {
    document.getElementById('Rua').value = endereco.logradouro;
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('Cidade').value = endereco.localidade;
    document.getElementById('Uf').value = endereco.uf;
};

const cepValido = (cep) => /^[0-9]{8}$/.test(cep); // Aceita 8 dígitos

const pesquisarCep = async () => {
    limparFormulario();
    const cep = document.getElementById('Cep').value;
    const url = `https:viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
            alert('CEP não encontrado!');
        } else {
            preencherFormulario(endereco);
        }
    } else {
        alert('CEP inválido!');
    }
};

// Adiciona o evento para buscar CEP automaticamente ao perder o foco do campo
document.getElementById('Cep').addEventListener('blur', pesquisarCep);