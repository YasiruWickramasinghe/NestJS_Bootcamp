import { IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional } from "class-validator"
import { Exclude, Expose } from "class-transformer"
import { ReportType } from "src/database/data";

//Dto for create Report with validations using class validator
export class CreateReportDto {

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

//Dto for update Report give optional in properties with validations using class validator
export class UpdateReportDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}

//Dto for get response in defferent ways using class transformer
export class ReportResponseDto {

    id: string;
    amount: number;
    source: string;

    @Expose({name: "createdAt"})
    transformCreatedAt(){
        return this.created_at;
    }
    @Exclude()
    created_at: Date;

    @Exclude()
    updated_at: Date;
    type: ReportType;



    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this, partial)
    }

}