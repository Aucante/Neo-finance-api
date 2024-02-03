import {IsEmail, IsNotEmpty} from "class-validator"

export class signupDTO {
    @IsNotEmpty()
    readonly username : string
    @IsNotEmpty()
    @IsEmail()
    readonly email : string
    @IsNotEmpty()
    readonly password : string
}