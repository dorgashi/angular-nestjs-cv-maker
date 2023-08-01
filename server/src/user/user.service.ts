import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { SomethingWentWrongException } from 'src/exceptions/something-went-wrong-exception';
import { HttpStatus } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto';
import { UserRO } from './user.interface';

@Injectable()
export class UserService {
    constructor(
        @Inject('DATA_SOURCE')
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async create(dto: CreateUserDto): Promise<UserRO> {
        const { email, username, password } = dto;

        const existingUser = this.userRepository.findOne({ where: { email } });

        if (!existingUser) {
            throw new HttpException(
                { message: { errors: ['1', '2', '3'] } },
                HttpStatus.BAD_REQUEST
            );
        }

        try {
            const user = this.userRepository.create({
                email,
                username,
                password,
            });

            const newUser = await this.userRepository.save(user);

            return this.buildUserRO(newUser);
        } catch (err) {
            throw new SomethingWentWrongException();
        }
    }

    buildUserRO(user: UserEntity): UserRO {
        return {
            user: {
                email: user.email,
                username: user.username,
                token: 'asdf',
            },
        };
    }
}
