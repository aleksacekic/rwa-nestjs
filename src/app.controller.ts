import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService,
  ) {}
  

  @Post('register')
  async register(
    @Body('ime') ime: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const noviTim = await this.appService.createTim({ ime });

    const user = await this.appService.create({
      ime,
      email,
      password: hashedPassword,
      virtuelniNovac: 10000,
      timId: noviTim.id,
    });

    delete user.password;

    return user;
  }


  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.appService.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });
    console.log('JWT Token:', jwt);
    response.cookie('jwt', jwt, { httpOnly: false, sameSite: 'none' });

    return {
      message: 'success',
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      console.log('Received cookie:', cookie);
      const data = await this.jwtService.verifyAsync(cookie);
      console.log(data)
      if (!data) {
        throw new UnauthorizedException();
      }

      const userId = parseInt(data['id'], 10);
      const user = await this.appService.findOne({ where: { id: userId } });

      const { password, ...result } = user;
      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
async logout(@Res({ passthrough: true }) response: Response) {
  response.clearCookie('jwt', {
    sameSite: 'none', 
    secure: true,
  });
  return {
    message: 'success',
  };
}
}
