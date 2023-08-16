import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/database/data';
import { ReportService } from 'src/report/report.service';
 
@Injectable()
export class SummaryService {

    //inject Report service to this Service
    constructor(private readonly reportService: ReportService) { }

    calculateSummery(){

        //get all report details
        const totalExpense = this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum, report) => sum + report.amount, 0)
        const totalIncome = this.reportService.getAllReports(ReportType.INCOME).reduce((sum, report) => sum + report.amount, 0)

        return{
            totalIncome,
            totalExpense,
            netIncome: totalIncome - totalExpense
        }
    }
}
