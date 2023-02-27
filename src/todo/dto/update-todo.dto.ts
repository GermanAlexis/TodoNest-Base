import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean } from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/common/IsOptional';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
