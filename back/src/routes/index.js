import express from 'express';
import { validateCreateBuilding } from '../rules/building.rules.js'
import * as buildingController from '../controllers/buildingController.js';

/* Creating a router object and then adding routes to it. */
const routes = express.Router()

//
routes.get("/buildings", buildingController.getAll);
routes.get("/buildings/:idBuilding",buildingController.get);
routes.post("/buildings/create", validateCreateBuilding, buildingController.create);
routes.put("/buildings/:idBuilding", validateCreateBuilding, buildingController.update);
routes.delete("/buildings/:idBuilding", buildingController.destroy);


export default routes