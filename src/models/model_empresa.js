import mongoose from 'mongoose';

const empresaSchema = new mongoose.Schema({
    cnpj: {
        type: String,
        required: true
    },
    razao_social: {
        type: String,
    },
    nome_fantasia: {
        type: String,
    },
    endereco: {
        type: String
    },
    telefones: {
        type: Array
    },
    vendas: {
        type: Array
    }
});

export const model_empresa = mongoose.model('empresa', empresaSchema);