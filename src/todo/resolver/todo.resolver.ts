import { Query, Resolver } from "@nestjs/graphql";
import { Todo } from "../entities/todo.entity";
import { TodoService } from "../todo.service";

@Resolver("Todo")
export class TodoResolver {
  constructor(private todoService : TodoService) {}
  @Query( () => [Todo])
  async findAll() {
    return this.todoService.findAll()
  }
}