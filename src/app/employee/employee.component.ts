import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent{
  public title_employee = 'Componente de empleado';
  public employee:Employee;
  public employees:Array<Employee>;
  public external_employee:boolean;

  constructor(){
  	this.employee = new Employee('Luis Sastré', 22, 'Software Developer', true);
  	this.employees = [
  		new Employee('Brandon', 24, 'Chef', false),
  		new Employee('Carlo', 23, 'Constructor', true),
  		new Employee('Luis', 22, 'Vendedor', false)
  	];
  	this.external_employee = false;
  }

  ngOnInit(){
    console.log(this.employee);
    console.log(this.employees);
  }

  changeExternal(value){
  	this.external_employee = value;
  }
}