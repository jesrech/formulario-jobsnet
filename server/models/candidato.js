const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    nascimento: { type: String, unique: false, required: true },      
    estadoCivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    cep: { type: Number, unique: false, required: true },
    rua: { type: String, unique: false, required: true },
    numResidencia: { type: Number, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    celular: { type: Number, unique: false, required: true },
    tel1: { type: Number, unique: false, required: false },
    tel2: { type: Number, unique: false, required: false },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: Number, unique: true, required: true },
    habilitacao: { type: String, unique: false, required: false },
    veiculo: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidato', CandidateSchema);