"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const taskController = new task_controller_1.default();
const router = express_1.default.Router();
router.route("/").get(taskController.getAllTask).post(taskController.postTask);
router.route("/:id").get(taskController.getById).delete(taskController.deleteTask);
//CRUD
exports.default = router;