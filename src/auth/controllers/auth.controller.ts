import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from '../guard/local-auth.guard'
import { AuthService } from '../services/auth.service'
import { UserLogin } from './../entities/user-login.entity'

@Controller('/usuarios')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UserLogin): Promise<any> {
        return this.authService.login(user)
    }
}
