import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
setTimeout(() =>{
  this.peliculasencines = [{
    titulo:'Spider-Man',
    fechaLanzamiento: new Date(),
    precio:1800
      },
      {
        titulo:'moana',
        fechaLanzamiento: new Date('2016-11-16'),
        precio:1300
          }
    ]
},6000);

  }
  title = 'front-end';

  peliculasencines;
  peliculasproximosestrenos=[]

  duplicarnumero(valor: number): number {
   return valor * 2 ;
  }
}
