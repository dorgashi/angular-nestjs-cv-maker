import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SomethingWentWrongException } from 'src/exceptions/something-went-wrong-exception';
import { Cv } from './cv.entity';
import { CreateCvDto } from './dto';

@Injectable()
export class CvService {
    constructor(
        @InjectRepository(Cv)
        private cvRepository: Repository<Cv>
    ) {}

    async create(dto: CreateCvDto): Promise<Cv> {
        try {
            const cv = this.cvRepository.create(dto);

            const newCv = await this.cvRepository.save(cv);

            return newCv;
        } catch (err) {
            console.log(err);
            throw new SomethingWentWrongException();
        }
    }

    async listForUser(userId: number): Promise<Cv[]> {
        return this.cvRepository.find({ where: { user_id: userId } });
    }
}
