import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DNIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calculadoraDNI(valor:Number):string{
    
    var comprobacion:Boolean=Number.isInteger(valor);
    var respuesta:string;
    var division:Number=Number(valor)/23; //He tenido que castear el parametro introducido "valor" como Number otra vez. No entiendo mucho por que. Si no lo hacia asi me daba error
    var comprobacion2:Boolean=Number.isInteger(division);// esta variable quizas es rizar el rizo, ya lo mirare mejor mañana.

    if(comprobacion=false || valor>99999999 || valor<1 ){//REVISAMOS SI A ALGUIEN NO LE DA LA GANA DE PONER BIEN SU NUMERO DE DNI

      return respuesta="El numero introducido no pertenece a ningun numero perteneciente al sistema DNI. Este numero ha de constar de 8 digitos. No puede ser ni negativo, ni presentar mas de 8 digitos ni ser decimal. Por favor, vuelva a introducir el numero "

    };

    if(comprobacion2=true){return respuesta="La letra correspondiente a su DNI es la letra T"};

    if(comprobacion2=false){

      //TRABAJAR CON LOS DECIMALES. AQUI ES DONDE EL CODIGO LO PUEDO REVOLVER MUCHO Y REINVENTARME LA PROGRAMACION. OS EXPLICO EL APPROACH MAÑANA
    }
    return respuesta="placeholder";// NO SE SI UTILIZANDO UN IF ELSE ME LIBRARIA DE TENER QUE PONER UN RETURN AQUI.
    
  }

}
