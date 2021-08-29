function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;
    
    let resultadoValidacao = validaCPF(cpf);
    
    if (!resultadoValidacao) {
        document.getElementById('erro-cpf').style.display = 'block';
        document.getElementById('erroBlocoCPF').style.border = '.1875rem solid red';
        return false;
    } else {
        document.getElementById('erro-cpf').style.display = 'none';
        document.getElementById('erroBlocoCPF').style.border = 'none';
        return true;
    }
}

document.getElementById('cpf').addEventListener('focusout', validacaoCPF);

const validaCEP = (cep) => cep.toString().length == 8;

const buscaCEP = async () => {
    LimpaRua();
    let validacao = false;
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validaCEP(cep)) {
        const data = await fetch(url);
        const rua = await data.json();
        if (rua.hasOwnProperty('erro')) {
            document.getElementById('erroCEP').style.display = 'block';
            document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
            validacao = false;
        } else {
            document.getElementById('erroCEP').style.display = 'none';
            document.getElementById('erroBlocoCEP').style.border = 'none';
            completaRua(rua);
            validacao = true;
        }
    } else {
        document.getElementById('erroCEP').style.display = 'block';
        document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
        validacao = false;
    }
    return validacao;
}

document.getElementById('cep').addEventListener('focusout', buscaCEP);

const completaRua = (rua) => {
    document.getElementById('rua').value = rua.logradouro;
    document.getElementById('bairro').value = rua.bairro;
    document.getElementById('cidade').value = rua.localidade;
    document.getElementById('uf').value = rua.uf;
}

const LimpaRua = () => {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}  

const Formulario = () => {
    let form = {
        nome: document.getElementById('name').value,
        cargo: document.getElementById('cargo').value,
        nascimento: document.getElementById('nascimento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        sexo: document.getElementById('sexo').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numResidencia: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('uf').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        tel1: document.getElementById('tel-1').value,
        tel2: document.getElementById('tel-2').value,
        identidade: document.getElementById('id').value,
        cpf: document.getElementById('cpf').value,
        habilitacao: document.getElementById('habilitacao').value,
        veiculo: document.getElementById('veiculo').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {
    
    const requisicao = await fetch('https://desafiojobsnet-backend.herokuapp.com/registro', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    if (requisicao.status === 200) {
        alert('Cadastro Concluído!');
    }

    if (requisicao.status === 500) {
        alert('CPF ou Email já cadastrado!')
    }
    
}

function check_form() {
   let nome = document.getElementById('name').value;
   let cargo = document.getElementById('cargo').value;
   let nascimento = document.getElementById('nascimento').value;
   let cep = document.getElementById('cep').value;
   let rua = document.getElementById('rua').value;
   let numResidencia = document.getElementById('numero').value;
   let bairro = document.getElementById('bairro').value;
   let cidade = document.getElementById('cidade').value;
   let estado = document.getElementById('uf').value;
   let email = document.getElementById('email').value;
   let celular = document.getElementById('celular').value;
   let identidade = document.getElementById('id').value;

   if (nome == "" || cargo == "" || nascimento == "" || cep == "" || rua == ""
        || numResidencia == "" || bairro == "" || cidade == "" || estado == "" || celular == "" ||
        email == false || identidade == "" || validacaoCPF() == false) {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        criarCandidato();
        alert('verificando cadastro...');
    }

}