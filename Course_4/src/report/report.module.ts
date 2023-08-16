import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';


@Module({
  controllers: [ReportController],
  providers: [ReportService],

  //export Report service to become available global
  //we can export multiple services if we have
  exports: [ReportService]
})
export class ReportModule {}
