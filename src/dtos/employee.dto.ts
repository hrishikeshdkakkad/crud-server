import { ArrayMaxSize, ArrayUnique, IsArray, IsInt, IsString, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @Length(1, 128)
  public name: string;

  @IsString()
  public dob: string;

  @IsInt()
  public salary: number;

  @IsArray()
  @ArrayMaxSize(10)
  @ArrayUnique()
  public skills: string;
}
