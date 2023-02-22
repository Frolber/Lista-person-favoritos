import personagens from "../models/Personagem.js";

class PersonagemController {
   static listarPersonagens = (req, res) => {
      personagens.find().exec((err, livros) => {
         res.status(200).json(livros);
      });
   };

   static listarPersonagemPorId = (req, res) => {
      const id = req.params.id;

      personagens.findById(id, (err, personagens) => {
         if (err) {
            res.status(400).send({
               message: `${err.message} - Não foi possível localizar o personagem por esse ID`,
            });
         } else {
            res.status(200).send(personagens);
         }
      });
   };

   static cadastrarPersonagem = (req, res) => {
      let personagem = new personagens(req.body);

      personagem.save((err) => {
         if (err) {
            res.status(500).send({
               message: `${err.message} - Ops! Algo falhou na hora de criar o personagem`,
            });
         } else {
            res.status(201).send(personagem.toJSON());
         }
      });
   };

   static atualizarPersonagem = (req, res) => {
      const id = req.params.id;

      personagens.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.send(200).send({
               message: "O personagem foi atualizado com sucesso.",
            });
         } else {
            res.send(500).send({
               message: `${err.message} - Ops! Algo deu errado na hora de atualizar esse personagem.`,
            });
         }
      });
   };

   static deletarPersonagem = (req, res) => {
      const id = req.params.id;

      personagens.findByIdAndRemove(id, (err) => {
         if (!err) {
            res.status(200).send({
               message: "Personagem excluído com sucesso!",
            });
         } else {
            res.status(500).send({
               message: `${err.message} - Algo deu errado na hora de excluir. o ID está certo?`,
            });
         }
      });
   };
}

export default PersonagemController;