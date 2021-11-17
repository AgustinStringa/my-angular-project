import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calc'
})
export class CalculatorPipe implements PipeTransform{

    /***
     * estructura de una pipe
     * 
     * dato1 | nombrepipe:dato2
     */

    transform(value: any, condiciones:string) {
        console.log('ejecutando pipe');
        let operador = condiciones[0];
        let operando:number = parseInt(condiciones.slice(1,condiciones.length))
        console.log(operador);
        console.log(operando);
        
        switch (operador){
            case '+':
                return value+operando
            case '-':
                return value -operando
            case '*':
                return value * operando
            case '/':
                return value/operando
            default:
                return 'error'
            
        }
        
    }
}