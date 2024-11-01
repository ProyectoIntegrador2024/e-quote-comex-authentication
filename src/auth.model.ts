import { ApiProperty } from '@nestjs/swagger';
export interface IUserAuth {
  email?: string;
  password?: string;
}
export class UserAuth implements IUserAuth {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
