import { AggregateRoot } from "@nestjs/cqrs";
import { CatCreatedEvent } from "../event/cat-created.event";

export class Cat extends AggregateRoot {
    constructor(private readonly id: string) {
      super();
    }
  
    killEnemy(enemyId: string) {
      // logic
      this.apply(new CatCreatedEvent(this.id, enemyId));
    }
  }