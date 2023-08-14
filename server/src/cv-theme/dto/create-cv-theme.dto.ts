import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCvThemeDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    title: string;
}
