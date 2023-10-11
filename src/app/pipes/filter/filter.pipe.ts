import { Pipe, PipeTransform } from '@angular/core';

interface Data {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Data[], searchText: string): Data[] {
    if (!value || !searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();

    return value.filter(item => {
      // Comprueba si al menos un campo contiene la cadena de búsqueda
      return Object.values(item).some(field => {
        if (typeof field === 'string') {
          return field.toLowerCase().includes(searchText);
        }
        return false;
      });
    });
  }
}
