import {model_empresa} from '../models/model_empresa';
import { Readable } from 'stream';
import readline from 'readline';

class empresaController {
    async index(req, res) {
        const empresa = await model_empresa.find();
        return res.json(empresa);
    }
    async upVend(req, res){
        const {_id} = req.query;
        const {file} = req;
        const {buffer} = file;
    
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
    
        const clientsLine = readline.createInterface({
            input: readableFile
        });
    
        let empresa = [];
    
        for await (let line of clientsLine){
            //separa cada item pelo separador ',' comum de um arquivo .CSV
            const clientsLineSplit = line.split(',');
            
            const data = {
                placa: clientsLineSplit[0],
                cpf_funcionario: clientsLineSplit[1],
                cpf_cliente: clientsLineSplit[2],
                data_venda: clientsLineSplit[3],
                preco_venda: clientsLineSplit[4],
                tipo: clientsLineSplit[5]
            }
    
    
            empresa.push(data)
        
        }
    
        const empresas = await model_empresa.updateOne({_id: _id}, {vendas: empresa});
    
        return res.json(empresas);
    }
    
    async create(req, res){
        const {file} = req;
        const {buffer} = file;
        
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
        
        const clientsLine = readline.createInterface({
            input: readableFile
        });
        
        let empresa = [];
        
        for await (let line of clientsLine){
            //separa cada item pelo separador ',' comum de um arquivo .CSV
            const clientsLineSplit = line.split(',');
            
            const data = {
                cnpj: clientsLineSplit[0],
                razao_social: clientsLineSplit[1],
                nome_fantasia: clientsLineSplit[2],
                endereco: clientsLineSplit[3],
                inscricao_estadual: clientsLineSplit[4],
                telefones: [clientsLineSplit[5], clientsLineSplit[6]],
            }
            
            
            empresa.push(data)
            
        }
        
        const empresas = await model_empresa.create(empresa);
        
        return res.json(empresas);
    }
}

export default new empresaController;

