import { Component } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { ICommand, EventObservable } from '@nestjs/cqrs';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { CatCreatedEvent } from '../events/impl/cat-created.event';
const clc = require('cli-color');

@Component()
export class CatSagas {
    catCreated = (events$: EventObservable<any>): Observable<ICommand> => {
        return events$
            .ofType(CatCreatedEvent)
            .delay(1000)
            .map(event => {
                console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
                return event
            });
    }
}