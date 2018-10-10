import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(contacts: Contact[], gender: string): any {
    return contacts.filter(c=>c.gender==gender).length;
  }

}
