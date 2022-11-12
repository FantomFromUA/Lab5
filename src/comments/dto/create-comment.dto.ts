import { IsNumber, IsString } from "class-validator"

export class CreateCommentDto {
    @IsNumber()
    public postId: number
    @IsNumber()
    public userId: number
    @IsString()
    public comment: string
}