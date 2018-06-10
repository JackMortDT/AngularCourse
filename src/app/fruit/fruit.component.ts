import { Component } from '@angular/core';

@Component({
	selector: 'fruit',
	template: `<h2> {{name_component}} </h2>
						 <p> {{fruit_list}} </p>`
}) 

export class FruitComponent{
	public name_component = 'Componente de fruta';
	public fruit_list = 'Naranja, Manzana, Pera y Sandia';
}