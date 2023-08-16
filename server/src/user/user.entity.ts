import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import * as argon2 from 'argon2';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ unsigned: true })
    @Exclude()
    id: number;

    @Column({ nullable: false, length: 255 })
    @Expose()
    username: string;

    @Column({ nullable: false, length: 255 })
    @Expose()
    email: string;

    @Column({ nullable: false, length: 255 })
    @Exclude()
    password: string;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.password = await argon2.hash(this.password);
    }
}
