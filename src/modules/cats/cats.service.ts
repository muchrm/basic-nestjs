import { Component } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Cat } from './interfaces/cat.interface';
import { Observable } from 'rxjs/Observable';

import { CreateCatCommand } from './commands/impl/create-cat.command';

@Component()
export class CatsService {
  constructor(
    private readonly commandBus: CommandBus
  ) {}
  private readonly cats: Cat[] = [];

  async create(cat: Cat) {
    return await this.commandBus.execute(
      new CreateCatCommand(cat),
    );
  }

  findAll(): Observable<Cat[]> {
    return Observable.of(this.cats);
  }
}