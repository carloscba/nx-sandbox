import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN,
    ];

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if(!this.isStatusValid(value)) {
            throw new BadRequestException();
        }
    }

    private isStatusValid(status: any) {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}