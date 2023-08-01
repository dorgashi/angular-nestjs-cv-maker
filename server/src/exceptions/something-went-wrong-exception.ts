import { InternalServerErrorException } from '@nestjs/common';

export class SomethingWentWrongException extends InternalServerErrorException {
    constructor() {
        super('Something went wrong');
    }
}
