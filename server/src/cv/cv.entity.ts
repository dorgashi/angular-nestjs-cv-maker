import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { User } from '../user/user.entity';
import { CvTheme } from '../cv-theme/cv-theme.entity';

@Entity()
export class Cv {
    @PrimaryGeneratedColumn({ unsigned: true })
    @Exclude()
    id: number;

    @Column({ unsigned: true, nullable: false })
    user_id: number;

    @ManyToOne(_type => User)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    @Exclude()
    user: User;

    @Column({ unsigned: true, nullable: false })
    theme_id: number;

    @ManyToOne(_type => CvTheme)
    @JoinColumn({ name: 'theme_id', referencedColumnName: 'id' })
    @Exclude()
    theme: CvTheme;

    @Column({ nullable: false, length: 255 })
    @Expose()
    full_name: string;

    @Column({ nullable: false, length: 255 })
    @Expose()
    job_title: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    email: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    phone_number: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    address: string;

    @Column({ nullable: true, default: null })
    @Expose()
    date_of_birth: Date;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    nationality: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    personal_id: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    marital_status: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    military_service: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    driving_license: string;

    @Column({ nullable: true, length: 255, default: null })
    @Expose()
    gender_or_pronouns: string;
}
