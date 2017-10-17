import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCatCommand } from "../impl/create-cat.command";
import { CatRepository } from "../../repository/cat.repository";

@CommandHandler(CreateCatCommand)
export class KillDragonHandler implements ICommandHandler<CreateCatCommand> {
  constructor(private readonly repository: CatRepository) {}

  async execute(command: CreateCatCommand, resolve: (value?) => void) {
    const { cat } = command;
    this.repository.createCat(cat);
    resolve();
  }
}