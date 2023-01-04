import TaskService from "../services/task.service";
import express, { Express, Request, Response } from "express";
import TaskInterface from "../interfaces";

class TaskController {
  taskService = new TaskService();

  getAllTask = (req: Request, res: Response) => {
    const tasks: any = this.taskService.allTask();

    res.json(tasks);
  };

  getById = (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const task =this.taskService.getById(id);
      
      (task)?res.send(task):res.status(401).send("Not found");
      
    } catch (error) {
      res.status(500).send("task not found");
    }
  };

  postTask = (req: Request, res: Response) => {
    try {
      const task: TaskInterface = req.body;
      console.log(req.body);
      this.taskService.addTask(task);
      res.status(200).json("task added sucessfully");
    } catch (error) {
      res.status(500).send(error);
    }
  };

  deleteTask = (req: Request, res:Response)=>{
    try{
      const id = req.params.id;
      this.taskService.deleteTask(id);

      res.send("Task deleted successfully");
    }catch(err){
      res.status(500).send("Failed to remove task");
    }
  }

  updateTask =(req:Request, res:Response) =>{
    try{
      const task = req.body;
      const result=this.taskService.updateTask(task);
      
      (result)? res.send("Updated successfully") : res.status(500).send("Failed to update");
    }catch(err){
      res.status(500).send("Failed to update");
    }
  }
}

export default TaskController;
