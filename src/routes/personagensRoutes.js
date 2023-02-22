import express from "express";
import PersonagemController from "../controllers/personagensControllers.js";

const router = express.Router();

   router
      .get("/personagens", PersonagemController.listarPersonagens)
      .get("/personagens/:id", PersonagemController.listarPersonagemPorId)
      .post("/personagens", PersonagemController.cadastrarPersonagem)
      .put("/personagens/:id", PersonagemController.atualizarPersonagem)
      .delete("/personagens/:id", PersonagemController.deletarPersonagem)

export default router;