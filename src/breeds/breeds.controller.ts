import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedsService.create(createBreedDto);
  }

  @Get()
  findAll() {
    return this.breedsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.breedsService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedsService.update(name, updateBreedDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.breedsService.remove(name);
  }
}
