import { AggregateRoot } from "@nestjs/cqrs";
import { CatCreatedEvent } from "../events/impl/cat-created.event";
import {Cat as Icat} from "../interfaces/cat.interface"
export class Cat extends AggregateRoot {
    constructor() {
      super();
      this.apply(new CatCreatedEvent());
    }
  }