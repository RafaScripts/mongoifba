import express from "express";
import ClienteController from "./controllers/clienteController";
import controllerVeiculos from "./controllers/controllerVeiculos";
import empresaController from "./controllers/empresaController";
import funcionarioController from "./controllers/funcionarioController";
//import FornecedorController from "./controllers/fornecedorController";
import multer from 'multer';
const multerConfig = multer();


const router = express();

router.get("/client", ClienteController.index)
    .post("/client", multerConfig.single('file'), ClienteController.create)
    .post("/clientp", multerConfig.single('file') ,ClienteController.createPosviel);

router.get('/veiculos', controllerVeiculos.index)
    .post('/veiculos', multerConfig.single('file'), controllerVeiculos.create)
    .put('/despesas', multerConfig.single('file'), controllerVeiculos.upDes);

router.get('/empresas', empresaController.index)
    .post('/empresas', multerConfig.single('file'), empresaController.create)
    .put('/empresas', multerConfig.single('file'), empresaController.upVend);

router.get('/funcionarios', funcionarioController.index)
    .post('/funcionarios', multerConfig.single('file'), funcionarioController.create);

export default router;