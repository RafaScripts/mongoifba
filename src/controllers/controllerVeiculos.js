import { Readable } from 'stream';
import readline from 'readline';
import {model_veiculo} from "../models/model_veiculo";

//import neatCsv from 'neat-csv';
//import Fs from 'fs';


class controllerVeiculos {
    async index(req, res) {
        const { ok, des, pl, km, ct } = req.query;
        
        /* A query parameter that filters the results. */
        if(ok){
            const veiculos = await model_veiculo.find({disponivel: 'Sim'});
            return res.json(veiculos);
        }
        
        if(km){
            const veiculos = await model_veiculo.find({disponivel: 'Sim'});
            let km = veiculos.sort();
            return res.json(km);
        }
        
        if(ct){
            const veiculos = await model_veiculo.find({disponivel: 'Sim'}).count();
            
            let data = {
                total: veiculos
            }
            
            return res.json(data);
        }
        
        if(pl){
            const veiculos = await model_veiculo.find({placa: pl});
            return res.json(veiculos);
        }
        
        
        const veiculos = await model_veiculo.find();
        
        if(des){
            let despesa = [];
    
            veiculos.map(veiculo => {
        
                despesa.push(veiculo.despesas);
        
            });
    
            console.log(despesa);
            
            let data = {
                veiculos: veiculos[0],
                despesa: despesa[0]
            }
            
            return res.json(data);
        }
        
        return res.json(veiculos);
    }
    async create (req, res){
        // separa do arquivo apenas o buffer
        const { file } = req;
        const { buffer } = file;
        
        //faz a leitura desse buffer
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
        
        // separa linha por linha do buffer
        const carsLine = readline.createInterface({
            input: readableFile
        });
        
        const cars = [];
        
        
        for await (let line of carsLine){
            //separa cada item pelo separador ',' comum de um arquivo .CSV
            const carsLineSplit = line.split(',');
            
            //aloca todos os dados em um array de objetos
            cars.push({
                placa: carsLineSplit[0],
                disponivel: carsLineSplit[1],
                preco_compra: carsLineSplit[2],
                preco_sugerido: carsLineSplit[3],
                tipo_combustivel: carsLineSplit[4],
                potencia_motor: carsLineSplit[5],
                ano_veiculo: carsLineSplit[6],
                descricao: carsLineSplit[7],
                quilometragem: carsLineSplit[8],
                dt_ultimo_emplacamento: carsLineSplit[9],
                cor: carsLineSplit[10],
                dt_ultima_atualizacao_quilometragem: carsLineSplit[11],
                quantidade_portas: carsLineSplit[12],
                de_terceiro: carsLineSplit[13],
                dt_cadastro: carsLineSplit[14],
                chassi: carsLineSplit[15],
                renavam: carsLineSplit[16],
                numero_motor: carsLineSplit[17],
                marca: carsLineSplit[18],
                modelo: carsLineSplit[19]
            })
        }
        
        // faz a leitura de cada objeto do array e grava no BD
        for await (let {placa, disponivel, preco_compra, preco_sugerido, tipo_combustivel, potencia_motor,
            ano_veiculo, descricao, quilometragem, dt_ultimo_emplacamento, cor, dt_ultima_atualizacao_quilometragem,
            quantidade_portas, de_terceiro, dt_cadastro, chassi, renavam, numero_motor, marca, modelo } of cars){
            
            model_veiculo.create({
                placa,
                disponivel,
                preco_compra,
                preco_sugerido,
                tipo_combustivel,
                potencia_motor,
                ano_veiculo,
                descricao,
                quilometragem,
                dt_ultimo_emplacamento,
                cor,
                dt_ultima_atualizacao_quilometragem,
                quantidade_portas,
                de_terceiro,
                dt_cadastro,
                chassi,
                renavam,
                numero_motor,
                marca,
                modelo
            });
            
        }
        
        //retorna o array para o cliente
        return res.json(cars);
    }
    async upDes (req, res){
        const { id } = req.query;
        const { file } = req;
        const { buffer } = file;
        
        //faz a leitura desse buffer
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
        
        // separa linha por linha do buffer
        const carsDesLine = readline.createInterface({
            input: readableFile
        });
        
        const carsDes = [];
    
        for await (let line of carsDesLine){
            //separa cada item pelo separador ',' comum de um arquivo .CSV
            const carsDesLineSplit = line.split(',');
        
            //aloca todos os dados em um array de objetos
            
            let data = {
                despesa_codigo: carsDesLineSplit[0],
                descricao: carsDesLineSplit[1],
                plaveiculoca: carsDesLineSplit[2],
                valor: carsDesLineSplit[3],
                data_realizacao: carsDesLineSplit[4],
            }
    
            carsDes.push(data);
        }
        
        // faz a leitura de cada objeto e grava no BD
        await model_veiculo.updateOne({_id: id}, {despesas: carsDes});
        
        return res.json(carsDes);
        
    }
}

export default new controllerVeiculos;