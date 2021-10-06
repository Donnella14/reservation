import express  from "express";

import SchedulerUserController from "../controllers/SchedulerContoller";
import Validator from "../middleware/userValidation";
import DataChecker from "../middleware/dataChecker";
import verifyAccess from "../middleware/verifyAccess";
import verifyToken from "../middleware/verifyToken";

const schedulerRouter = express.Router();
schedulerRouter.post("/create",Validator.validateInput,DataChecker.ValidateEmailDuplicate,SchedulerUserController.createScheduler);
schedulerRouter.get("/all",SchedulerUserController.getAllScheduler);
schedulerRouter.get("/:id",Validator.checkId(),Validator.validateInput,SchedulerUserController.getOne);

schedulerRouter.delete("/:id",Validator.checkId(),Validator.validateInput,SchedulerUserController.deleteScheduler);

schedulerRouter.patch("/:id",Validator.checkId(),Validator.validateInput, SchedulerUserController.updateScheduler);

export default schedulerRouter;