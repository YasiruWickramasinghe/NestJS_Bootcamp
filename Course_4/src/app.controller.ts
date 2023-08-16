import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import { ReportType } from './database/data'
import { AppService } from './app.service';
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from './dtos/reports.dto'

@Controller('report/:type')
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get()
  getAllReports(
    //validate using ParseEnumPipe we ensure that the type is either income or expense
    @Param('type', new ParseEnumPipe(ReportType)) type: string
    //return types / response types using ReportResponseDto
    //here get return array 
    ) : ReportResponseDto[] {

    //check type in parameter
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById(
    //validate using ParseEnumPipe we ensure that the type is either income or expense
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    //Validate using ParseUUIDPipe we ensure that the id is a uuid
    @Param('id', ParseUUIDPipe) id: string
    //return types / response types using ReportResponseDto
  ) : ReportResponseDto {

    //check type in parameter
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getReportById(reportType, id)
  }

  @Post()
  createReport(
    //validate using ParseEnumPipe we ensure that the type is either income or expense
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    //validate using CreateReportDto we ensure that the body is correct
    @Body() { amount, source }: CreateReportDto,
    //return types / response types using ReportResponseDto
  ) : ReportResponseDto {

    //check type in parameter
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.createReport(reportType, { amount, source })
  }

  @Put(':id')
  updateReport(
    //validate using ParseEnumPipe we ensure that the type is either income or expense
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    //Validate using ParseUUIDPipe we ensure that the id is a uuid
    @Param('id', ParseUUIDPipe) id: string,
    //validate using CreateReportDto we ensure that the body is correct
    @Body() body: UpdateReportDto
    //return types/response types using ReportResponseDto
  ) : ReportResponseDto {

    //check type in parameter
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.updateReport(reportType, id, body)
  }

  @HttpCode(204)
  @Delete(":id")
  deleteReport(
    //Validate using ParseUUIDPipe we ensure that the id is a uuid
    @Param('id', ParseUUIDPipe) id: string
  ) {

    return this.appService.deleteReport(id)
  }
}
