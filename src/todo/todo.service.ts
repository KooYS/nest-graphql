import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly todo : Repository<Todo>) {}
  
  findAll(){
    return this.todo.find()
  }
}
