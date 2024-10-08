/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/cadastro')
    cadastroUsuario(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.cadastroUsuario(authCredentialsDto);
    }

    @Post('/acessar')
    acessar(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }>{
        return this.authService.ecessar(authCredentialsDto);
    }


}
