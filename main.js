//use Strict; Modo restrito

// consumo da API viaCEP
//https://viacep.com.br/

const limparFormulario = () => {
    document.getElementById('Nome').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Cpf').value = '';
    document.getElementById('Cep').value = '';
    document.getElementById('Rua').value = '';
    document.getElementById('Numero').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';   //mudar o que esta dentro do parenteses pelo Id que esta no html
    document.getElementById('Uf').value = '';
}

//funçao para preencher o formulario
const preencherFormulario = (endereco) => {
    document.getElementById('Rua').value = endereco.logradouro;
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('Cidade').value = endereco.localidade;
    document.getElementById('Uf').value = endereco.uf;
}

//verificaçao se o Cep é valido


//confere se o Cep tem o tamanho certo
