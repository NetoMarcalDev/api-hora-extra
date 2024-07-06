/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Length, Matches } from "class-validator";
export class AuthCredentialsDto {
  
  @IsNotEmpty()
  @IsString()
  @Length(4, 20)
  descricao: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(8, 32)
 @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha informamada é fraca.',
  })
  senha: string;
}
