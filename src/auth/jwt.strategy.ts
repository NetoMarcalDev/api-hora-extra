/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'; 
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from './jwt-payload.interface';
import { UsuariosRepository } from "./repositories/usuario.repository";
import { Usuario } from './entities/user.entity';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        @InjectRepository(UsuariosRepository)
        private usuariosRepository: UsuariosRepository,
        private configService: ConfigService, 
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: JwtPayload): Promise<Usuario> {
        const { descricao } = payload;
        const usuario: Usuario = await this.usuariosRepository.findOne({ descricao });

        if(!usuario) {
            throw new UnauthorizedException();
        }
        return usuario;
    }
}
