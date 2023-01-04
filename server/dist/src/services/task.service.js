"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class TaskService {
    constructor() {
        this.tasks = [
            {
                id: (0, uuid_1.v4)(),
                name: "food",
                description: "shopping",
                progress: "incomplete",
                startDate: new Date(),
                endDate: new Date(),
            },
            {
                id: (0, uuid_1.v4)(),
                name: "food",
                description: "shopping",
                progress: "incomplete",
                startDate: new Date(),
                endDate: new Date(),
            },
        ];
        this.allTask = () => {
            return this.tasks;
        };
        this.getById = (id) => {
            return this.tasks.find((task) => task.id === id);
        };
    }
    addTask(task) {
        task.id = (0, uuid_1.v4)();
        this.tasks.push(task);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTask(updateTask) {
        let task = this.getById(updateTask.id);
        if (task) {
            if (updateTask.description)
                task.description = updateTask.description;
            if (updateTask.name)
                task.name = updateTask.name;
            if (updateTask.progress)
                task.progress = updateTask.progress;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = TaskService;
