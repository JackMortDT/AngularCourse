import { Component } from '@angular/core';

@Component({
	selector: 'fruit',
	templateUrl: './fruit.component.html'
}) 

export class FruitComponent{
	public name_component = 'Componente de fruta';
	public fruit_list = 'Naranja, Manzana, Pera y Sandia';

	public username:string;
	public age:number;
	public adult:boolean;
	public games:Array<string> = ['Final Fantasy','The Binding of Isaac','Dont Starve'];
	public list:Array<any> = ['Luis', 22, true];
	wildcard:any = 23;

  constructor(){
  	this.username = "LuisSas";
  	this.age = 22;
  	this.adult = true;
  	console.log("Hola");
  	console.log(this.games);
  }
}