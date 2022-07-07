import mongoose from 'mongoose';

const funcionarioSchema = new mongoose.Schema({
    nome_completo: {
        type: String,
        required: true
    },
    cpf_funcionario: {
        type: String,
    },
    rg: {
        type: String,
    },
    funcao: {
        type: String
    },
    estado_civil: {
        type: String
    },
    data_nascimento: {
        type: Date
    },
    telefones: {
        type: Array
    },
    salario: {
        type: String
    },
    endereco: {
        type: String
    },
    email: {
        type: String
    },
    escolaridade: {
        type: String
    },
    senha: {
        type: String
    },
    status: {
        type: String
    },
    empresas: {
        type: Array
    }
});

export const model_funcionario = mongoose.model('funcionario', funcionarioSchema);