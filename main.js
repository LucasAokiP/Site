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
const eNumero = (Numero) => /^[0-9]+$/.test(Numero);

//confere se o Cep tem o tamanho certo
const cepValido = (Cep) => Cep.length == 8 && eNumero(Cep);

//Consumo de API viaCep
const pesquisarCep = async() =>{
    limparFormulario();
    const url = `http://viacep.com.br/ws/${Cep.value}/json/`;

    if(cepValido(Cep.value)){
        const dados = await fetch(url);
        const addres =await dados.json();

        if(addres.hasOwnPropety('erro')){
            alert('Cep não encontrado');
        }
        else{
            preencherFormulario(addres);
        }
    }
    else{
        alert('Cep incorreto');
    }
}

document.getElementById('Cep').addEventListener('focuosout',pesquisarCep);