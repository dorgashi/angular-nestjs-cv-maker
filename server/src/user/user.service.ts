import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { SomethingWentWrongException } from 'src/exceptions/something-went-wrong-exception';
import { HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findById(id: number): Promise<User | null> {
        return this.userRepository.findOne({ where: { id } });
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { username } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } });
    }

    async create(dto: CreateUserDto): Promise<User | null> {
        const { email, username, password } = dto;
        const existingUser = await this.userRepository.findOne({
            where: { email: email },
        });

        if (existingUser) {
            throw new HttpException(
                {
                    message: {
                        errors: ['User with that email already exists'],
                    },
                },
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

            return newUser;
        } catch (err) {
            console.log(err);
            throw new SomethingWentWrongException();
        }
    }
}
