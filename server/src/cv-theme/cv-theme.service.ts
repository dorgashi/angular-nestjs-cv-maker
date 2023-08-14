import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SomethingWentWrongException } from 'src/exceptions/something-went-wrong-exception';
import { CvTheme } from './cv-theme.entity';
import { CreateCvThemeDto } from './dto';

@Injectable()
export class CvThemeService {
    constructor(
        @InjectRepository(CvTheme)
        private cvThemeRepository: Repository<CvTheme>
    ) {}

    async create(dto: CreateCvThemeDto): Promise<CvTheme> {
        try {
            const cv = this.cvThemeRepository.create(dto);

            const newCv = await this.cvThemeRepository.save(cv);

            return newCv;
        } catch (err) {
            console.log(err);
            throw new SomethingWentWrongException();
        }
    }
}
