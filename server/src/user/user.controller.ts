import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserRO } from './user.interface';
import { LoginUserDto } from './dto';

@Controller('user')
export class UserController {
    // @Post('users/login')
    // async login(@Body('user') loginUserDto: LoginUserDto): Promise<UserRO> {
    //     const user = await this.userService.findOne(loginUserDto);
    // }
}
