import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvThemeService } from './cv-theme.service';
import { CvThemeController } from './cv-theme.controller';
import { CvTheme } from './cv-theme.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([CvTheme]), AuthModule, UserModule],
    providers: [CvThemeService],
    controllers: [CvThemeController],
    exports: [CvThemeService],
})
export class CvThemeModule {}
