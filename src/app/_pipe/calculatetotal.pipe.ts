import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatetotal'
})
export class CaculatetotalPipe implements PipeTransform {

  transform(value, items) {
    let count = 0;

    items.forEach(element => {
        count += element.product.price * element.quantity; 
    });

    return count + '€';
  }

}
