import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Sensor extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  temperature: number;

  @property({
    type: 'number',
    required: true,
  })
  pressure: number;

  @property({
    type: 'number',
    required: true,
  })
  altitude: number;


  constructor(data?: Partial<Sensor>) {
    super(data);
  }
}
