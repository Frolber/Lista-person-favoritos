import express from "express";
import personagens from "./personagensRoutes.js";

const routes = (app) => {
   app.route("/").get ( (req, res) => {
      res.status(200).send( {titulo: "Mundo dos personagens favoritos"});
   });

   app.use(
      express.json(),
      personagens
   )
}

export default routes;

