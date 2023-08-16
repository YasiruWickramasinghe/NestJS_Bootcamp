import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { ReportModule } from 'src/report/report.module';

@Module({
  //import and inject Report module to this summary Service therefore we don't need to import services one by one
  imports: [ReportModule],

  controllers: [SummaryController],
  providers: [SummaryService,]
})
export class SummaryModule { }
