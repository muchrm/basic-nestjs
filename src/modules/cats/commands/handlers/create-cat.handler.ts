import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateCatCommand } from '../impl/create-cat.command';
import { CatRepository } from '../../repository/cat.repository';

const clc = require('cli-color');

@CommandHandler(CreateCatCommand)
export class CreateCatHandler implements ICommandHandler<CreateCatCommand> {
  constructor(
    private readonly repository: CatRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateCatCommand, resolve: (value?) => void) {
    console.log(clc.greenBright('CreateCatCommand...'));

    const { cat } = command;
    await this.repository.createCat(cat),
    resolve();
  }
}