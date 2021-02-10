import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateprice'
})
export class CaculatepricePipe implements PipeTransform {

  transform(value, quantity): unknown {
    return value * quantity + "€";
  }

}
