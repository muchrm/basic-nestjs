import { CreateCatCommand } from './commands/impl/create-cat.command';
import { Module, OnModuleInit } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CommandBus, EventBus, CQRSModule } from '@nestjs/cqrs';
import { CatRepository } from './repository/cat.repository';
import { CatCreatedEvent } from './events/impl/cat-created.event';
import { CreateCatHandler } from './commands/handlers/create-cat.handler';
import { CatSagas } from './sagas/cats.sagas';
import { ModuleRef } from '@nestjs/core';
import { CatCreatedHandler } from './events/handlers/cat-created.handler';

@Module({
  modules: [CQRSModule],
  controllers: [CatsController],
  components: [
    CatsService,
    CatSagas,
    CreateCatHandler,
    CatCreatedHandler,
    CatRepository,
  ],
})
export class CatsModule implements OnModuleInit{
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: CommandBus,
    private readonly event$: EventBus,
    private readonly catSagas: CatSagas,
  ) {}
  onModuleInit() {
    this.command$.setModuleRef(this.moduleRef);
    this.event$.setModuleRef(this.moduleRef);

    this.event$.register([CatCreatedHandler]);
    this.command$.register([CreateCatHandler]);
    this.event$.combineSagas([this.catSagas.catCreated]);
  }
}