import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateCvDto } from './dto';
import { Cv } from './cv.entity';
import { CvService } from './cv.service';
import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from 'src/user/current-user.decorator';
import { User } from 'src/user/user.entity';

@Controller('cv')
@UseGuards(AuthGuard)
export class CvController {
    constructor(private cvService: CvService) {}
    @Post('create')
    async create(
        @Body() createCvDto: CreateCvDto,
        @CurrentUser() currentUser: User
    ): Promise<Cv> {
        return this.cvService.create({
            user_id: currentUser.id,
            ...createCvDto,
        });
    }
    @Get('list')
    async listForUser(@CurrentUser() currentUser: User): Promise<Cv[]> {
        return this.cvService.listForUser(currentUser.id);
    }
}
