import mongoose from 'mongoose';

const veiculoSchema = new mongoose.Schema({
    placa: {
        type: String,
        required: true
    },
    disponivel: {
        type: String,
    },
    preco_compra: {
        type: String,
    },
    preco_sugerido: {
        type: String
    },
    tipo_combustivel: {
        type: String
    },
    potencia_motor: {
        type: String
    },
    ano_veiculo: {
        type: Date,
    },
    descricao: {
        type: String
    },
    quilometragem: {
        type: String
    },
    dt_ultimo_emplacamento: {
        type: Date
    },
    cor: {
        type: String
    },
    dt_ultima_atualizacao_quilometragem: {
        type: Date
    },
    quantidade_portas: {
        type: String
    },
    de_terceiro: {
        type: String
    },
    dt_cadastro: {
        type: Date
    },
    chassi: {
        type: String
    },
    renavam: {
        type: String
    },
    numero_motor: {
        type: String
    },
    marca: {
        type: String
    },
    modelo: {
        type: String
    },
    despesas: {
        type: Array
    }
});

export const model_veiculo = mongoose.model('veiculo', veiculoSchema);