import express from 'express';
import TaskController from '../controllers/task.controller';

const taskController= new TaskController();

const router= express.Router();

router.route("/").get(taskController.getAllTask).post(taskController.postTask);

router.route("/:id").get(taskController.getById).delete(taskController.deleteTask);

//CRUD

export default router;