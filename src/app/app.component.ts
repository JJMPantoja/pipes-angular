import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'JuAn JOse MarTInez';

  formato: string = 'es-Mx';
  videoUrl: string = 'https://www.youtube.com/embed/QZmiENtwYPw'

  activar: boolean = true;

  arr=[1,2,3,4,5,6,7,8,9];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  fecha: Date = new Date();

  valorPromesa = new Promise<string> ((resolve) => {
    setTimeout( () => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'logan',
    edad: '500',
    clave: 2,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }



}
