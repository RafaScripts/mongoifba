import express from "express";
import ClienteController from "./controllers/clienteController";
//import ProdutoController from "./controllers/produtoController";
import FornecedorController from "./controllers/fornecedorController";

const router = express();

router.get("/client", ClienteController.index)
    .post("/client", ClienteController.create)
    .put("/client", ClienteController.update)
    .delete("/client", ClienteController.delete);

router.get("/fornecedor", FornecedorController.index)
    .post("/fornecedor", FornecedorController.create)
    .put("/fornecedor", FornecedorController.update)
    .delete("/fornecedor", FornecedorController.delete);


export default router;