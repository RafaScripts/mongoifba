import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    cnpj: {
        type: String,
    },
    email: {
        type: String,
    },
    endereco: {
        type: Object,
    },
    telefones: {
        type: Array,
    },
    nome_representante: {
        type: String,
    }
});

export const model_fornecedor = mongoose.model('fornecedor', fornecedorSchema);