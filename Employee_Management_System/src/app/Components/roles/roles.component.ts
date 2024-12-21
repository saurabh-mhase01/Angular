import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { Irole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit{
  roleList: Irole [] =[];
  http:HttpClient = inject(HttpClient);
  //constructor(private http: HttpClient){} //this is the old way of dependency injection

  //this is a component life cycle method which is being called when the component is fully loaded
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
        this.roleList=res.data;
    });
  }
}
