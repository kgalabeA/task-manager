"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = __importDefault(require("../services/task.service"));
class TaskController {
    constructor() {
        this.taskService = new task_service_1.default();
        this.getAllTask = (req, res) => {
            const tasks = this.taskService.allTask();
            res.json(tasks);
        };
        this.getById = (req, res) => {
            try {
                const id = req.params.id;
                const task = this.taskService.getById(id);
                (task) ? res.send(task) : res.status(401).send("Not found");
            }
            catch (error) {
                res.status(500).send("task not found");
            }
        };
        this.postTask = (req, res) => {
            try {
                const task = req.body;
                console.log(req.body);
                this.taskService.addTask(task);
                res.status(200).json("task added sucessfully");
            }
            catch (error) {
                res.status(500).send(error);
            }
        };
        this.deleteTask = (req, res) => {
            try {
                const id = req.params.id;
                this.taskService.deleteTask(id);
                res.send("Task deleted successfully");
            }
            catch (err) {
                res.status(500).send("Failed to remove task");
            }
        };
        this.updateTask = (req, res) => {
            try {
                const task = req.body;
                const result = this.taskService.updateTask(task);
                (result) ? res.send("Updated successfully") : res.status(500).send("Failed to update");
            }
            catch (err) {
                res.status(500).send("Failed to update");
            }
        };
    }
}
exports.default = TaskController;
