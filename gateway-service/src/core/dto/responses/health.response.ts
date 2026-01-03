import { ApiProperty } from "@nestjs/swagger";

export class HealthResponse {
    @ApiProperty({
        example: 'OK'
    })
    public status: string;

    @ApiProperty({
        example: "2026-01-03T10:30:00.000Z",
    })
    public timestamp: string;
}
