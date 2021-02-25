import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateTechnologyParam, TechnologyParamById, UpdateTechnologyParam } from "../dto/technology.dto";
import Technology from "../entities/technology.entity";


@Injectable()
export default class TechnologyService {
   constructor(
       @InjectRepository(Technology) private techRepo: Repository<Technology>
   ){}

   public async create(data: CreateTechnologyParam): Promise<Technology> {
       const tech = new Technology();
       tech.name = data.name;
       if(data.parent_id){
           const parentTech = await this.techRepo.findOne({where: { id: data.parent_id, parent: null}})
           if(parentTech) {
            tech.parent = parentTech
           } else {
             throw new BadRequestException('Invalid Parent Id Provided');
           }
       }
     return await this.techRepo.save(tech);
   }
   public async getAll(){
     return this.techRepo.find({});
   }
   private async findById(id: string){
    return this.techRepo.findOne({where: {id}});
   }
   public async getById(id: string): Promise<Technology | undefined >{
    return this.techRepo.findOne({where: {id}});
   }
   public async delete(data: TechnologyParamById​​): Promise<DeleteResult> {
     const technology = await this.findById(data.id);
     if(technology) {
      return await this.techRepo.delete(data.id)
     }
     throw new NotFoundException('Invalid Parent Id Provided');
  }

  public async update(data: UpdateTechnologyParam): Promise<Technology> {
    const technology = await this.findById(data.id);
     if(technology) {
      technology.name = data.name;
      return this.techRepo.save(technology);
     }
     throw new NotFoundException('Invalid Parent Id Provided');
  }
}