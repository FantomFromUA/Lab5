import { IsString } from "class-validator";

export class UpdateCommentDto {
    @IsString()
    public comment: string
}