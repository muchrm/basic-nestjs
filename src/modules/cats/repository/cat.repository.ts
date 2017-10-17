import { Component } from '@nestjs/common';
import { Cat as ICat} from '../interfaces/cat.interface';
import { Cat } from '../models/cat.model';

@Component()
export class CatRepository {
  async createCat(cat:ICat){
       return new Cat();
  }
}