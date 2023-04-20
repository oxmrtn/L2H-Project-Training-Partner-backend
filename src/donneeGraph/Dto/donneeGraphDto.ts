import { IsString, IsNotEmpty, Length, IsNumber } from  "class-validator"

export class DonneeGraphDto{
    @IsNumber()
    readonly idGraph : number

    @IsNotEmpty()
    readonly donnees : { nomAttribut : string, valeur : number }[]
}