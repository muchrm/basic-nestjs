import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { CatsController } from './cats/cats.controller';

@Module({
  modules: [
    CatsModule,
    AuthModule,
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(loggerMiddleware).forRoutes(CatsController);
  }
}