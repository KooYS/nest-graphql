import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  deadline: Date;
}

export class CreateTodoInput {
  title: string;
  description: string;
  deadline: Date;
}
