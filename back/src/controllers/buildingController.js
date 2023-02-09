import { Op } from 'sequelize';
import { Building } from '../models/Building.js'

/**
 * This function will return all the buildings in the database.
 * @returns An array of Building objects.
 */
export const getAll = async (_req, res) => {
    const { page, limit, term } = _req.query;

    const allBuilding = await Building.findAndCountAll({  
        where: {
            title: {
                [Op.like]: `%${term}%`
            }
        },
        limit: parseInt(limit) || 10, offset: (page || 0) * (limit || 10),
        order: [
            ['id', 'DESC']
        ],
    });
    return res.status(200).json(allBuilding);
}

/**
 * This function will find a building by its id and return it as a json response.
 * @returns A building object.
 */
export const get = async (req, res) => {
    const building = await getBuilding(req.params.idBuilding);
    return res.status(200).json({data:building});
}

/**
 * It takes a password from the request body, hashes it, and then creates a new building with the hashed
 * password.
 * @returns The building is being returned.
 */
export const create = async (req, res) => {
    try {
        await Building.create(req.body)
        return res.status(200).json({ success: true, msg: 'Inmueble Creado Correctamente' });
    } catch (error) {
        console.log(error);
        return res.json({success: false, msg: error.array()});
    }

}

/**
 * It updates the building's data in the database.
 * @returns The building object
 */
export const update = async (req, res, next) => {
    try {
        let building = await getBuilding(req.params.idBuilding);

        building?.update({
            ...req.body
        })
        building?.save();
        return res.status(200).json({success: true, building});
    } catch (error) {
        console.log(error);
        return res.json({success: false, msg: error.array()});
    }
}

/**
 * It finds a building by its primary key, and if it exists, it destroys it.
 * @returns The building is being returned.
 */
export const destroy = async (req, res, next) => {
    try {
        let building = await getBuilding(req.params.idBuilding); 
            
        if(building) building.destroy()

        return res.status(200).json({msg : 'El inmueble se ha eliminado', building: building});
    } catch (error) {
        console.log(error);
        return res.json({success: false, msg: error.array()});
        next();
    }
}

const getBuilding = (id) => Building.findByPk(id);
