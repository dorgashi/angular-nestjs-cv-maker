import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCvDto } from './dto';
import { Cv } from './cv.entity';
import { CvService } from './cv.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Controller('cv')
export class CvController {
    constructor(private cvService: CvService) {}
    @Post('create')
    async create(@Body() createCvDto: CreateCvDto): Promise<Cv> {
        return this.cvService.create(createCvDto);
    }
    @Get('list/:userId')
    async listForUser(@Param('userId') userId: number): Promise<Cv[]> {
        return this.cvService.listForUser(userId);
    }
}
