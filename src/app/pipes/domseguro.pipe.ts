import { Pipe, PipeTransform } from '@angular/core';

// Limpiar o validar una url
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl( value );
  }

}
