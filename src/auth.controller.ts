import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody } from '@nestjs/swagger';
import { IUserAuth, UserAuth } from './auth.model';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  @ApiBody({
    type: UserAuth,
  })
  @HttpCode(HttpStatus.OK)
  login(@Body() UserAuth: IUserAuth): IUserAuth {
    return this.appService.login(UserAuth);
  }
}
