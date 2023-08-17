import User from "../../models/User.js";

// Create
// Req es el objeto donde el cliente me manda MUCHOS DATOS importantes acerca de la peticion
// Las propiedades de req MAS IMPORTANTES SON:
// BODY: Objeto que generalmente se envia a travez de formularios
// PARAMS (parametros): suelen ser estaticos como el id de una ciudad a buscar por ejemplo
// QUERIES (consultas): Son opcionales y nos indican algunas consultas/filtros/modos de ver la info/ de pagina, etc

export default async (req, res, next) => {
    try {
        let newUser = await User
            .create(req.body)

        if (newUser) {
            return res.status(201).json({
                sucess: true,
                message: 'User created',
                response: newUser._id
            })
        } else {
            return res.status(404).json({
                sucess: false,
                message: 'User not created',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}