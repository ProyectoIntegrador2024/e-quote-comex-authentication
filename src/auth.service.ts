import { Injectable, BadRequestException } from '@nestjs/common';
import { IUserAuth } from './auth.model';
import { AUTH_MESSAGE } from './constants/messages.constants';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  login(userAuth: IUserAuth): IUserAuth {
    // const { email, password } = UserAuth;
    this.validateLogin(userAuth);
    //si no devuelve error debo ir a buscarlo a bdd
    //si existe en bdd comparo contra cognito
    return userAuth;
  }
  private validateLogin(userAuth: IUserAuth): void {
    const { email, password } = userAuth;
    if (!email || !password) {
      throw new BadRequestException(AUTH_MESSAGE.UserCredentialsIncorrect);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new BadRequestException(AUTH_MESSAGE.emailIncorrect);
    }
  }
}
