import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './cats/middlwares/logger.middleware';
import { AuthMiddleware } from './middlewares/auth.middlware';
import { AdminModule } from './admin/admin.module';
import { FacultiesModule } from './faculties/faculties.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AdminModule,
    FacultiesModule,
    AuthModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersModule);
    consumer
      .apply(AuthMiddleware)
      .exclude('auth')
      .forRoutes('cats', 'admins', 'faculties');
  }
}
