import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { RolesComponent } from './component/roles/roles.component';
import { MasterComponent } from './component/master/master.component';

@Component({
  selector: 'app-root',
  imports: [MasterComponent],
  // RouterOutlet RolesComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
