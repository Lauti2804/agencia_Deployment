import express from "express";
import router  from "./routes/index.js";
import db from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config({path: 'variables.env'});

//Conectar la base de datos
db.authenticate()
    .then( () => console.log("Base de datos conectada"))
    .catch(error => console.log(error));

const app = express();     

//Definir el puerto
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

//Habilitar pug
app.set("view engine", "pug");

//Obtener el año actual

app.use((req, res, next)=>{
    const year = new Date();
    res.locals.nombresitio = "Agencia de viajes"
    res.locals.actualYear = year.getFullYear();

    next();
});


//Agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended : true}))





//Definir la carpeta publica

app.use(express.static("public"));


//Agregar router
app.use("/", router);

// //Puerto y host para la app
// const ports = process.env.HOST


app.listen( port, host, ()=>{
    console.log("El servidor esta funcionando")
});


app.use(express.static('public'));


app.use('/viajes', express.static('public'));
