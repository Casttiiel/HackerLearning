import { Component, OnInit } from '@angular/core';
import { LetraDNI } from '../estructura-dni';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DNIComponent implements OnInit {

  constructor() { }
  numero:number=0;
  respuesta:string="";
  ngOnInit(): void {
    
  }

  calculadoraDNI(valor:number):void{
   
    var comprobacion=Number.isInteger(valor);
    
    var resto= valor % 23;
    var letra=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    if(comprobacion==false || valor>99999999 || valor<1 ){//REVISAMOS SI A ALGUIEN NO LE DA LA GANA DE PONER BIEN SU NUMERO DE DNI

       this.respuesta="El numero introducido no pertenece a ningun numero perteneciente al sistema DNI. Este numero ha de constar de 8 digitos. No puede ser ni negativo, ni presentar mas de 8 digitos ni ser decimal. Por favor, vuelva a introducir el numero "

    };
      
     this.respuesta="La letra que corresponde a su numero de DNI es:"+letra[resto];
    
  }

}
