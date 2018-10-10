import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Hola Angular';
  imagenUrl = "assets/logo.png";
  elementos = [{
    titulo: "angular",
    ciudad: "bogota"
  }
    ,{
      titulo: "angular-2",
      ciudad: "bogota"
    },{
      titulo: "angular-3",
      ciudad: "bogota"
    },{
      titulo: "angular-4",
      ciudad: "bogota"
    },{
      titulo: "angular-5",
      ciudad: "bogota"
    }];

  alerta(){
    alert("Se hizo click en la imagen");
  }
}
