import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    cod_produto: {
        type: String,
    },
    porct_lucro: {
        type: Number,
    },
    marca: {
        type: String,
    },
    foto: {
        type: String,
    },
    preco_venda: {
        type: Number,
    },
    quantidade_estoque: {
        type: Number,
    },
    nome_produto: {
        type: String,
    },
    estoque_min: {
        type: Number,
    },
    preco_custo: {
        type: Number,
    },
    descricao: {
        type: String,
    },
    fornecedor: {
        type: mongoose.SchemaTypes.ObjectId,
    }
});

export const model_produto = mongoose.model('produto', produtoSchema);