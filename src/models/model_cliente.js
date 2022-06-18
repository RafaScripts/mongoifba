import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    data_nascimento: {
        type: Date
    },
    endereco: {
        type: String
    },
    telefones: {
        type: Array
    },
    moto: {
        type: mongoose.SchemaTypes.ObjectId
    }
});

export const model_cliente = mongoose.model('cliente', clienteSchema);