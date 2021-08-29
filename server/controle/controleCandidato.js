const Candidato = require('../models/candidato');

module.exports = {
    async register(req, res) {
        const { nome, cargo, nascimento, estadoCivil, sexo, cep, rua, numResidencia,
            bairro, cidade, estado, email, celular, tel1, tel2, identidade, cpf, habilitacao,
            veiculo } = req.body;

        const novoCandidato = new Candidato();

        novoCandidato.nome = nome;
        novoCandidato.cargo = cargo;
        novoCandidato.nascimento = nascimento;
        novoCandidato.estadoCivil = estadoCivil;
        novoCandidato.sexo = sexo;
        novoCandidato.cep = cep;
        novoCandidato.rua = rua;
        novoCandidato.numResidencia = numResidencia;
        novoCandidato.bairro = bairro;
        novoCandidato.cidade = cidade;
        novoCandidato.estado = estado;
        novoCandidato.email = email;
        novoCandidato.celular = celular;
        novoCandidato.tel1 = tel1;
        novoCandidato.tel2 = tel2;        
        novoCandidato.identidade = identidade;
        novoCandidato.cpf = cpf;
        novoCandidato.habilitacao = habilitacao;
        novoCandidato.veiculo = veiculo;

        novoCandidato.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(savedCandidate);
        });
    }
}