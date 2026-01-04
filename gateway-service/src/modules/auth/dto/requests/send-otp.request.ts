import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, Validate } from 'class-validator';
import { IndentifierValidator } from 'src/shared/validators';

export class SendOtpRequest {
    @ApiProperty({
        example: "+34999888777"
    })
    @IsString()
    @Validate(IndentifierValidator)
    public identifier: string;

    @ApiProperty({
        example: "phone",
        enum: ['email', 'phone']
    })
    @IsEnum(['email', 'phone'])
    public type: 'email' | 'phone';
}
