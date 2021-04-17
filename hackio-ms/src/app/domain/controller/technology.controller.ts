import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import TechnologyService from '../services/technology.service';
import {
  ApiTags, ApiInternalServerErrorResponse,
  ApiOkResponse, ApiBadRequestResponse, ApiOperation, ApiBearerAuth
} from '@nestjs/swagger';
import { PARAMETERS_FAILED_VALIDATION, RESULTS_RETURNED } from '../../constants.api';
import { TechnologyParamById, CreateTechnologyParam, UpdateTechnologyParam } from '../dto/technology.dto';

@Controller('technologies')
@ApiBearerAuth('authorization')
@UsePipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}))
export class TechnologyController {
  constructor(private readonly techService: TechnologyService) { }

  @ApiTags('technology')
  @ApiOperation({ description: 'get all technology by uuid' })
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
  @ApiOperation({ description: 'get a technology by uuid' })
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
  @ApiOperation({ description: 'create new technology' })
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
  @ApiOperation({ description: 'update technology' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been updated successfully' })
  @Put('/')
  public async updateTechnology(@Body() data: UpdateTechnologyParam) {
    try {
      return this.techService.update(data);
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('technology')
  @ApiOperation({ description: 'delete technology' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @Delete('/:id')
  public async deleteTechnology(@Param() params: TechnologyParamById) {
    try {
      return this.techService.delete(params);
    } catch (err) {
      throw err;
    }
  }
}