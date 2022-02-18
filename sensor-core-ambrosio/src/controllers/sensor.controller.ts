import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Sensor} from '../models';
import {SensorRepository} from '../repositories';

export class SensorController {
  constructor(
    @repository(SensorRepository)
    public sensorRepository : SensorRepository,
  ) {}

  @post('/sensors', {
    responses: {
      '200': {
        description: 'Sensor model instance',
        content: {'application/json': {schema: {'x-ts-type': Sensor}}},
      },
    },
  })
  async create(@requestBody() sensor: Sensor): Promise<Sensor> {
    return await this.sensorRepository.create(sensor);
  }

  @get('/sensors/count', {
    responses: {
      '200': {
        description: 'Sensor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sensor)) where?: Where,
  ): Promise<Count> {
    return await this.sensorRepository.count(where);
  }

  @get('/sensors', {
    responses: {
      '200': {
        description: 'Array of Sensor model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Sensor}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sensor)) filter?: Filter,
  ): Promise<Sensor[]> {
    return await this.sensorRepository.find(filter);
  }

  @patch('/sensors', {
    responses: {
      '200': {
        description: 'Sensor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() sensor: Sensor,
    @param.query.object('where', getWhereSchemaFor(Sensor)) where?: Where,
  ): Promise<Count> {
    return await this.sensorRepository.updateAll(sensor, where);
  }

  @get('/sensors/{id}', {
    responses: {
      '200': {
        description: 'Sensor model instance',
        content: {'application/json': {schema: {'x-ts-type': Sensor}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Sensor> {
    return await this.sensorRepository.findById(id);
  }

  @patch('/sensors/{id}', {
    responses: {
      '204': {
        description: 'Sensor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() sensor: Sensor,
  ): Promise<void> {
    await this.sensorRepository.updateById(id, sensor);
  }

  @put('/sensors/{id}', {
    responses: {
      '204': {
        description: 'Sensor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sensor: Sensor,
  ): Promise<void> {
    await this.sensorRepository.replaceById(id, sensor);
  }

  @del('/sensors/{id}', {
    responses: {
      '204': {
        description: 'Sensor DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sensorRepository.deleteById(id);
  }
}
