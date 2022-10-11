import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarOcultar'
})
export class MostrarOcultarPipe implements PipeTransform {

  transform(nombre: string, mostrar: boolean = false): string {
    return (mostrar) ? '*'.repeat(nombre.length) : nombre;
  }

}
