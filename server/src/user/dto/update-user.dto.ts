import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    readonly username: string;
}
