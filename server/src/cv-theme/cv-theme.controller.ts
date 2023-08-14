import { Controller, Post, Body } from '@nestjs/common';
import { CreateCvThemeDto } from './dto';
import { CvTheme } from './cv-theme.entity';
import { CvThemeService } from './cv-theme.service';

@Controller('cv-theme')
export class CvThemeController {
    constructor(private cvThemeService: CvThemeService) {}
    @Post('create')
    async create(@Body() createCvThemeDto: CreateCvThemeDto): Promise<CvTheme> {
        return this.cvThemeService.create(createCvThemeDto);
    }
}
