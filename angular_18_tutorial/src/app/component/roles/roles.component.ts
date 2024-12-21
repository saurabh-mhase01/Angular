import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-roles',
  
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName : string ="Angular tutorial";
  version : number = 18;
  isActive : boolean = false;
  currentDate : Date = new Date( ) ;
  // inputType : string ="radio"
  // inputType : string ="checkbox"
  inputType : string ="button";
  selectedState : String =" ";

  showWelcomeAlert(){
    alert("Welcome to Angular 18 Tutorial");
  }
  showMessage(message : string){
    alert(message);
  }
}
