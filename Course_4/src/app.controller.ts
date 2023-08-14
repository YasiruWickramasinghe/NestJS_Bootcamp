import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  //constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports() {
    return [];
  }

  @Get()
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put()
  updateReport() {
    return 'Updated';
  }

  @Delete()
  deleteReport() {
    return 'Deleted';
  }
}
