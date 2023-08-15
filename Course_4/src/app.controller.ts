import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode } from '@nestjs/common';
import { ReportType, data } from './database/data'
import { v4 as uuid } from "uuid"
//import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  //constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: string) {
    //check type in parameter
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  //check parameters type as well as id
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType).find(report => report.id === id)
  }

  @Post()
  createReport(@Body() { amount, source }: { amount: number; source: string; }, @Param('type') type: string) {
    //set bodt data
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)
    return newReport;
  }

  @Put(':id')
  updateReport(@Param('type') type: string, @Param('id') id: string, @Body() body: { amount: number; source: string; }
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    //find id to update
    const reportToUpdate = data.report.filter((report) => report.type === reportType).find(report => report.id === id)

    //if report not exist
    if (!reportToUpdate) return;

    //find index to update the data in array
    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id)

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    }

    return data.report[reportIndex]
  }

  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param('id') id: string,) {
    //find index to delete the data in array
    const reportIndex = data.report.findIndex((report) => report.id === id)

    //if report not exist
    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1)

    return;
  }
}
