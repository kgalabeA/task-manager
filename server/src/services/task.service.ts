import TaskInterface from "../interfaces";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../interfaces/task.interface";
class TaskService {
  tasks: TaskInterface[] = [
    {
      id: uuidv4(),
      name: "food",
      description: "shopping",
      progress: "incomplete",
      startDate: new Date(),
      endDate: new Date(),
    },

    {
      id: uuidv4(),
      name: "food",
      description: "shopping",
      progress: "incomplete",
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  public allTask = () => {
    return this.tasks;
  };

  public getById = (id: any) => {
    return this.tasks.find((task) => task.id === id);
  };

  public addTask(task: any) {
    task.id = uuidv4();
    this.tasks.push(task);
  }

  public deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTask(updateTask: TaskInterface) {
    let task = this.getById(updateTask.id);

    if (task) {
      if (updateTask.description) task.description = updateTask.description;
      if(updateTask.name) task.name = updateTask.name;
      if(updateTask.progress) task.progress = updateTask.progress;

      return true;
    }else{
      return false;
    }
  }
}

export default TaskService;
