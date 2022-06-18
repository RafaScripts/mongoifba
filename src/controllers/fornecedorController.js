import {model_fornecedor} from "../models/model_fornecedor";

class FornecedorController {
    async index(req, res) {
        const fornecedores = await model_fornecedor.find();
        return res.json(fornecedores);
    }

    async create(req, res) {
        const {nome, cnpj, email, endereco, telefones, nome_representante} = req.body;

        const data = {
            nome,
            cnpj,
            email,
            endereco,
            telefones,
            nome_representante
        };

        const fornecedor = await model_fornecedor.create(data);

        return res.json(fornecedor);
    }

    async update(req, res) {
        const {id} = req.query;
        const {nome, cnpj, email, endereco, telefones, nome_representante} = req.body;
        const data = {
            nome,
            cnpj,
            email,
            endereco,
            telefones,
            nome_representante
        };
        const fornecedor = await model_fornecedor.updateOne({_id: id}, data);
        return res.json(fornecedor);
    }

    async delete(req, res) {
        const {id} = req.query;
        const fornecedor = await model_fornecedor.deleteOne({_id: id});
        return res.json(fornecedor);
    }
}

export default new FornecedorController;