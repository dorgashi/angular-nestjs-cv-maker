import { Test, TestingModule } from '@nestjs/testing';
import { CvThemeController } from './cv-theme.controller';

describe('CvThemeController', () => {
    let controller: CvThemeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CvThemeController],
        }).compile();

        controller = module.get<CvThemeController>(CvThemeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
