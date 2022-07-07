import {model_cliente} from "../models/model_cliente";

import { Readable } from 'stream';
import readline from 'readline';

class ClienteController {
    async index(req, res) {
        const clientes = await model_cliente.find();
        return res.json(clientes);
    }

    async create(req, res) {
        const { file } = req;
        const { buffer } = file;
    
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
    
        const clientsLine = readline.createInterface({
            input: readableFile
        });
        
        let clients = [];
    
        for await (let line of clientsLine){
            //separa cada item pelo separador ',' comum de um arquivo .CSV
            const clientsLineSplit = line.split(',');
            
            let data = {
                nome_completo: clientsLineSplit[0],
                cpf_cliente: clientsLineSplit[1],
                rg: clientsLineSplit[2],
                email: clientsLineSplit[3],
                estado_civil: clientsLineSplit[4],
                data_nascimento: clientsLineSplit[5],
                telefones: [clientsLineSplit[6], clientsLineSplit[7]],
                endereco: clientsLineSplit[8]
            }
            
            clients.push(data)
            
        }
        
        const cliente = await model_cliente.create(clients);

        return res.json(cliente);
    }
    
    async createPosviel(req, res) {
        const { file } = req;
        const { buffer } = file;
        
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
        
        const clientsLine = readline.createInterface({
            input: readableFile
        });
        
        let clients = [];
        
        for await (let line of clientsLine){
            //separa cada item pelo separador ',' comum de um arquivo .CSV
            const clientsLineSplit = line.split(',');
            
            let data = {
                nome_completo: clientsLineSplit[0],
                telefones: [clientsLineSplit[1], clientsLineSplit[2]],
                procurando: {
                    data_procura: clientsLineSplit[3],
                    ano_veiculo: clientsLineSplit[4],
                    quilometragem: clientsLineSplit[5],
                    modelo: clientsLineSplit[6],
                    marca: clientsLineSplit[7]
                },
                posivel_cliente: "sim"
            }
            
            clients.push(data)
            
        }
        
        const cliente = await model_cliente.create(clients);
        
        return res.json(cliente);
    }
};

export default new ClienteController;