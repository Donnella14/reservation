import express  from "express";

import SectorUserController from "../controllers/SectorUserController";
import Validator from "../middleware/userValidation";
import DataChecker from "../middleware/dataChecker";
import verifyAccess from "../middleware/verifyAccess";
import verifyToken from "../middleware/verifyToken";

const sectorRouter = express.Router();
sectorRouter.post("/create",Validator.validateInput,DataChecker.ValidateEmailDuplicate,SectorUserController.createSector);
sectorRouter.get("/all",SectorUserController.getAllSector);
sectorRouter.get("/:id",Validator.checkId(),Validator.validateInput,SectorUserController.getOne);

sectorRouter.delete("/:id",Validator.checkId(),Validator.validateInput,SectorUserController.deleteSector);

sectorRouter.patch("/:id",Validator.checkId(),Validator.validateInput, SectorUserController.updateSector);

export default sectorRouter;

