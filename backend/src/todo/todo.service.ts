import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoInput, Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly todo : Repository<Todo>) {}
  
  findAll(){
    return this.todo.find()
  }

  addTodo(todo : CreateTodoInput){
    console.log(todo)
    return this.todo.save(this.todo.create(todo))
  }
}
