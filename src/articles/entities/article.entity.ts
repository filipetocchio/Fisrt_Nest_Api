import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client'

export class ArticleEntity implements Article{
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: String;
    @ApiProperty({ required: false, nullable: true })
    description: String | null;
    @ApiProperty()
    Body: String;
    @ApiProperty()
    published: Boolean;
    @ApiProperty()
    createAt: Data;
    @ApiProperty()
    updatedAt: Data;
}
