import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateTechnologyParam {
  @ApiProperty({ description: 'name of technology', required: true })
  @IsString()
  public name!: string;

  @ApiProperty({ description: 'name of technology', required: false })
  @IsOptional()
  public description!: string;

  @ApiProperty({ description: 'uuid of parent technology', required: false })
  @IsOptional()
  @IsUUID()
  public parent_id!: string;
}

export class UpdateTechnologyParam extends CreateTechnologyParam {

  @ApiProperty({ description: 'uuid of technology', required: true })
  @IsUUID()
  public id!: string;
}


export class TechnologyParamById {
    @ApiProperty({ description: 'uuid of technology', required: true })
    @IsUUID()
    public id!: string;
}