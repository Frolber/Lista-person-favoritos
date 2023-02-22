import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema({
   id: { type: String },
   nomeCompletoPerson: { type: String, required: true },
   apelidoPerson: { type: String, required: true },
   universoPerson: { type: String, required: true },
   descricaoPerson: { type: String, required: true },
});

const personagens = mongoose.model('personagens', personagemSchema);

export default personagens;