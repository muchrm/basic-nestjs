import { ICommand } from '@nestjs/cqrs';
import { Cat } from '../../interfaces/cat.interface';
export class CreateCatCommand implements ICommand {
  constructor(
    public readonly cat: Cat,
  ) {}
}