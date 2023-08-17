import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id
        }
        if (req.query.city) {
            objetoDeBusqueda.city = new RegExp(req.query.city, 'i')
            //new RegExp(req.query.title,'i')
        }
        if (req.query.sort) {
            objetoDeOrdenamiento.city = req.query.sort
            //agrego la propiedad por la cual QUIERO ORDENAR
            //si es 1 ordena ascendentemente
            //si es -1 ordena descendentemente
        }
        let allCities = await City
            .find(objetoDeBusqueda, 'country city photo smalldescription admin_id')
            .populate('admin_id', 'photo name mail -_id')
            .sort(objetoDeOrdenamiento)

        if (allCities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Cities founds',
                response: allCities
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Cities not founds',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}