import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ObjectIdValidationPipe implements PipeTransform {
  transform(value: any): any {
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException({
        error: {
          status: 400,
          message: 'Invalid ID format',
          field: '_id',
          suggestion: 'Provide a valid MongoDB ObjectId.',
        },
      });
    }
    return value;
  }
}
