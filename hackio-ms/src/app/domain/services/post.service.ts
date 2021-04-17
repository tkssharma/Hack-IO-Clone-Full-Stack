import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import TechnologyPost from '../entities/post.entity';
import Technology from '../entities/technology.entity';

@Injectable()
export default class PostService {
  constructor(
    @InjectRepository(TechnologyPost) private techRepo: Repository<TechnologyPost>
  ) { }
  public async createTechnology(data: any) {
    try {
      const technology = new TechnologyPost();
      technology.media_link = data.media_link;
      technology.name = data.name;
      technology.title = data.title;
      technology.description = data.description;
      return this.techRepo.save(technology);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}