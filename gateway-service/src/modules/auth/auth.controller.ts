import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SendOtpRequest } from './dto';
import { ApiOperation } from '@nestjs/swagger';
import { AuthClientGrpc } from './auth.grpc';

@Controller('auth')
export class AuthController {
    public constructor(private readonly client: AuthClientGrpc) { }

    @ApiOperation({
        summary: 'Send OTP to email or phone',
        description: 'Sends a one-time password (OTP) to the specified email address or phone number based on the provided type.'
    })
    @Post("otp/send")
    @HttpCode(HttpStatus.OK)
    public async sendOtp(@Body() dto: SendOtpRequest) {
        return this.client.sendOtp(dto);
    }


}
