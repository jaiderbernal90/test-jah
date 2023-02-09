import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'

export const validateCreateBuilding = [
    check('type')
        .exists()
        .not()
        .isEmpty()
        .withMessage('El campo tipo de inmueble es requerido'),
    check('description')
        .exists()
        .isLength({ max: 500 })
        .withMessage('El campo descripción no debe contener más de 500 caracteres'),
    check('title')
        .exists()
        .isLength({ max: 255 })
        .withMessage('El campo titlulo no debe contener más de 255 caracteres'),
    (req,res,next)=>{
        validateResult(req,res,next)
    }
];
