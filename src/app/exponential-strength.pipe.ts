import { Pipe, PipeTransform } from '@angular/core';



@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform{
    transform(value: number, exponent:string): number{
        let exp = parseFloat(exponent);                 //ko phải là số thì 1, ko thì lấy nguyên gtri
        return Math.pow(value, isNaN(exp) ? 1 : exp);   //tính số mũ tùy theo gtri exp truyền vào
    }
}