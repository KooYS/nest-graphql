import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonConfigModule } from './common/config/config.module';
import { TodoModule } from './todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CommonConfigModule,
    TodoModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
