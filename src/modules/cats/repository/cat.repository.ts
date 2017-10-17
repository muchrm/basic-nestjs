import { Component } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';

@Component()
export class CatRepository {
  async createCat(cat:Cat){
       
  }
}