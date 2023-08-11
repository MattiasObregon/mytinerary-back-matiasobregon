import { model,Schema } from "mongoose";

//lo primero que necesitamos crear es el espacio virtual donde se van a guardar todos los documentos/modelos
//es decir LA COLECCION (conjunto de documentos/modelos de datos)
let collection = 'users'

//lo siguiente es definir el schema de datos del modelo
//es decir EL MODEL / LA FORMA que tiene que tener mi modelo de datos
let schema = new Schema({
    name: { type:String,required:true },  //por default TODOS los datos son opciones (required:false)
    lastName: { type:String },
    mail: { type:String, required:true, unique:true },
    photo: { type:String, default: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"},
    password: { type:String, required:true },
    country: { type:String, required:true }
})
//para crear un modelo de datos utilizao el metodo model
//pasando como parametros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection,schema)
export default User