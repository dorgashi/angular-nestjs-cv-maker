import {
    IsString,
    IsNumber,
    IsPhoneNumber,
    IsDateString,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';

export class CreateCvDto {
    @IsNotEmpty()
    @IsNumber()
    readonly theme_id: number;

    @IsNotEmpty()
    @IsString()
    readonly full_name: string;

    @IsNotEmpty()
    @IsString()
    readonly job_title: string;

    @IsOptional()
    @IsString()
    readonly email: string;

    @IsOptional()
    @IsPhoneNumber()
    readonly phone_number: string;

    @IsOptional()
    @IsString()
    readonly address: string;

    @IsOptional()
    @IsDateString()
    readonly date_of_birth: string;

    @IsOptional()
    @IsString()
    readonly nationality: string;

    @IsOptional()
    @IsString()
    readonly personal_id: string;

    @IsOptional()
    @IsString()
    readonly marital_status: string;

    @IsOptional()
    @IsString()
    readonly military_service: string;

    @IsOptional()
    @IsString()
    readonly driving_license: string;

    @IsOptional()
    @IsString()
    readonly gender_or_pronouns: string;
}
