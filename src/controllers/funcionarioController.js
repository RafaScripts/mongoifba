import {model_funcionario} from '../models/model_funcionario';
import { Readable } from 'stream';
import readline from 'readline';

class funcionarioController {
    async index(req, res) {
        const funcionarios = await model_funcionario.find();
        return res.json(funcionarios);
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
                nome_completo: clientsLineSplit[0],
                cpf_funcionario: clientsLineSplit[1],
                rg: clientsLineSplit[2],
                funcao: clientsLineSplit[3],
                estado_civil: clientsLineSplit[4],
                data_nascimento: clientsLineSplit[5],
                telefones: [clientsLineSplit[6], clientsLineSplit[7]],
                salario: clientsLineSplit[8],
                endereco: clientsLineSplit[9],
                email: clientsLineSplit[10],
                escolaridade: clientsLineSplit[11],
                senha: clientsLineSplit[12],
                status: clientsLineSplit[13],
                empresas: [{
                    _id: clientsLineSplit[14],
                    cpnj: clientsLineSplit[15],
                    cpf: clientsLineSplit[16],
                    data_admissao: clientsLineSplit[17],
                }]
            }
            
            
            empresa.push(data)
            
        }
        
        const funcionarios = await model_funcionario.create(empresa);
        
        return res.json(funcionarios);
    }
}

export default new funcionarioController;

