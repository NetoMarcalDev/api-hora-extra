/* eslint-disable prettier/prettier */
import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Usuario } from "./entities/user.entity"

export const GetUser = createParamDecorator(
    (data, ctx: ExecutionContext): Usuario => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
    },
)
