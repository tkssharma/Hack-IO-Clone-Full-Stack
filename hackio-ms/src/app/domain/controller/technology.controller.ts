import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import TechnologyService from '../services/technology.service';
import { ApiTags, ApiInternalServerErrorResponse, ApiOkResponse, ApiBadRequestResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PARAMETERS_FAILED_VALIDATION, RESULTS_RETURNED } from 'src/app/constants.api';
import { TechnologyParamById, CreateTechnologyParam, UpdateTechnologyParam } from '../dto/technology.dto';
import { ENTITY_ACCEPTED } from '../../app.constants';

@Controller('/api/v1/technologies')
@ApiBearerAuth('authorization')
@UsePipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}))
export class CategoryController {
  constructor(private readonly techService: TechnologyService) { }

  @ApiTags('technology')
  @ApiOperation({ description: '' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/')
  public async getAllTechnology() {
    try {
      return this.techService.getAll();
    } catch (err) {
      throw err;
    }
  }
  @ApiTags('technology')
  @ApiOperation({ description: '' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/:id')
  public async getTechnologyById(@Param() params: TechnologyParamById) {
    try {
      return this.techService.getById(params.id);
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('technology')
  @ApiOperation({ description: '' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Post('/')
  public async createTechnologyById(@Body() data: CreateTechnologyParam) {
    try {
      return this.techService.create(data);
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('technology')
  @ApiOperation({ description: '' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Put('/')
  public async updateTechnologyById(@Body() data: UpdateTechnologyParam) {
    try {
      return this.techService.update(data);
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('technology')
  @ApiOperation({ description: '' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Delete('/:id')
  public async deleteTechnologyById(@Param() params: TechnologyParamById) {
    try {
      return this.techService.delete(params);
    } catch (err) {
      throw err;
    }
  }

}