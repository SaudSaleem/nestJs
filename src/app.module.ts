import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './cats/middlwares/logger.middleware';
import { AuthMiddleware } from './cats/middlwares/auth.middleware';
import { AdminModule } from './admin/admin.module';
import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [UsersModule, AdminModule, FacultiesModule, TypeOrmModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
