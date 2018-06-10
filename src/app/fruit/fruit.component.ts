import { Component } from '@angular/core';

@Component({
	selector: 'fruit',
	templateUrl: './fruit.component.html'
}) 

export class FruitComponent{
	public name_component = 'Componente de fruta';
	public fruit_list = 'Naranja, Manzana, Pera y Sandia';
}