import { Component } from '@angular/core';

@Component({
	selector: 'fruit',
	templateUrl: './fruit.component.html'
}) 

export class FruitComponent{
	public name_component = 'Componente de fruta';
	public fruit_list = 'Naranja, Manzana, Pera y Sandia';

	public username:string = "LuisSas";
	public age:number = 22;
	public adult:boolean = true;
	public games:Array<string> = ['Final Fantasy','The Binding of Isaac','Dont Starve'];
	public list:Array<any> = ['Luis', 22, true];
	wildcard:any = 23;
}