import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { tasks } from "./tasks.mock";

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return "This action adds a new task";
  }

  findAll() {
    return tasks;
  }

  findOne(id: number) {
    return tasks.find((task) => task.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
