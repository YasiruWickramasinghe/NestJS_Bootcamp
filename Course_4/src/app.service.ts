import { Injectable } from '@nestjs/common';
import { ReportType, data } from './database/data';
import { v4 as uuid } from "uuid"
import { ReportResponseDto } from './dtos/reports.dto';

//initialize body types
interface Report {
  amount: number,
  source: string
}

//initialize body types can be optional by using '?'
interface UpdateReport {
  amount?: number,
  source?: string
}

@Injectable()
export class AppService {

  //Get All reports
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report))
  }
  
  //Get Report by report ID
  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find(report => report.id === id)

      if(!report) return;

      return new ReportResponseDto(report);
  }
  
  //Create new Report
  createReport(type: ReportType, { amount, source }: Report): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    }
    data.report.push(newReport)
    return new ReportResponseDto(newReport);
  }
  
  //Update report related to specific ID
  updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto {
    //find id to update
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find(report => report.id === id)

    //if report not exist
    if (!reportToUpdate) return;

    //find index to update the data in array
    const reportIndex = data.report
      .findIndex((report) => report.id === reportToUpdate.id)

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    }

    return new ReportResponseDto(data.report[reportIndex]);
  }


  //Delete Report related to specific ID
  deleteReport(id: string) {
    //find index to delete the data in array
    const reportIndex = data.report
      .findIndex((report) => report.id === id)

    //if report not exist
    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1)

    return;
  }
}
