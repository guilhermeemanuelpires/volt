import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {CidadesEntity} from '../entity/cidade.entity';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';

@Injectable()
export class cidadeService {
  constructor (
    @InjectRepository(CidadesEntity) private readonly repository: Repository<CidadesEntity>,
  ) {}

  async paginate(options: IPaginationOptions): Promise<Pagination<CidadesEntity>> {
    const queryBuilder = this.repository.createQueryBuilder('c');
    queryBuilder.orderBy('c.nome', 'DESC'); // Or whatever you need to do

    return paginate<CidadesEntity>(queryBuilder, options);
  }
}