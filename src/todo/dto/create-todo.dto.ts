import {
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
