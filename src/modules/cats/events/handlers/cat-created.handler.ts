import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { CatCreatedEvent } from '../impl/cat-created.event';

const clc = require('cli-color');

@EventsHandler(CatCreatedEvent)
export class CatCreatedHandler implements IEventHandler<CatCreatedEvent> {
  handle(event: CatCreatedEvent) {
    console.log(clc.greenBright('CatCreatedEvent...'));
  }
}