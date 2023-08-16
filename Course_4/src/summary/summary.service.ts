import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';
 
@Injectable()
export class SummaryService {

    //inject Report service to this Service
    constructor(private readonly reportService: ReportService) { }

    calculateSummery(){
        
    }
}
