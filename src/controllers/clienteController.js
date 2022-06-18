import {model_cliente} from "../models/model_cliente";

class ClienteController {
    async index(req, res) {
        const clientes = await model_cliente.find();
        return res.json(clientes);
    }

    async create(req, res) {
        const {nome, data_nascimento, email, endereco, telefones} = req.body;
        const data = {
            nome,
            data_nascimento,
            email,
            endereco,
            telefones
        };
        const cliente = await model_cliente.create(data);

        return res.json(cliente);
    }

    async update(req, res) {
        const {id} = req.query;
        const {nome, data_nascimento, email, endereco, telefones} = req.body;
        const data = {
            nome,
            data_nascimento,
            email,
            endereco,
            telefones
        };
        const cliente = await model_cliente.updateOne({_id: id}, data);
        return res.json(cliente);
    }

    async delete(req, res) {
        const {id} = req.query;
        const cliente = await model_cliente.deleteOne({_id: id});
        return res.json(cliente);
    }
};

export default new ClienteController;