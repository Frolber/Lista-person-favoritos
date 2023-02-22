import mongoose from "mongoose";

mongoose.connect("mongodb+srv://frolber:111@person-fav.5qbsyiy.mongodb.net/person-fav");

let db = mongoose.connection;

export default db;