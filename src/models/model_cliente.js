import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nome_completo: {
        type: String,
        required: true
    },
    cpf_cliente: {
        type: String,
    },
    rg: {
        type: String,
    },
    email: {
        type: String,
    },
    estado_civil: {
        type: String
    },
    data_nascimento: {
        type: Date
    },
    endereco: {
        type: String
    },
    veiculo_terceiro: {
        type: mongoose.SchemaTypes.ObjectId
    },
    veiculos: {
        type: Array
    },
    possivel_cliente: {
        type: String,
    },
    procurando: {
        type: Object,
    }
});

export const model_cliente = mongoose.model('cliente', clienteSchema);