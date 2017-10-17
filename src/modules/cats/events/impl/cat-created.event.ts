import { IEvent } from "@nestjs/cqrs";

export class CatCreatedEvent implements IEvent {
    constructor() {}
  }