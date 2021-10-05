import express  from "express";

import SectorUserController from "../controllers/SectorUserController";
import Validator from "../middleware/userValidation";
import DataChecker from "../middleware/dataChecker";
import verifyAccess from "../middleware/verifyAccess";
import verifyToken from "../middleware/verifyToken";

const sectorRouter = express.Router();
sectorRouter.post("/create",Validator.validateInput,DataChecker.ValidateEmailDuplicate,SectorUserController.createSector);

export default sectorRouter;

