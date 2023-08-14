import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class CvTheme {
    @PrimaryGeneratedColumn({ unsigned: true })
    @Exclude()
    id: number;

    @Column({ length: 255, nullable: false, default: null })
    @Expose()
    title: string;
}
