import { IsNotEmpty, IsOptional } from 'class-validator';

export default class UpdateProfileDto {
  @IsNotEmpty({ message: "Le nom d'utilisateur est obligatoire" })
  name: string;

  @IsOptional()
  oldPassword: string;

  @IsOptional()
  password: string;
}
