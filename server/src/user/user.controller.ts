import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }
}
