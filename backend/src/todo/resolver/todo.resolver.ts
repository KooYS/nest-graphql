import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTodoInput, Todo } from "../entities/todo.entity";
import { TodoService } from "../todo.service";

@Resolver("Todo")
export class TodoResolver {
  constructor(private todoService : TodoService) {}
  @Query( () => [Todo])
  async findAll() {
    return this.todoService.findAll()
  }

  @Mutation(() => Todo)
  async addTodo(@Args("todo") todo: CreateTodoInput) {
    return await this.todoService.addTodo(todo);
  }

}