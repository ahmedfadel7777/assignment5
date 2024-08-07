import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{
  usersList:any[]=[]

  constructor(private _UsersService:UsersService){}

  ngOnInit(): void {
    this._UsersService.getAllUsers().subscribe({
      next:(res)=>{
        console.log(res.users);
        this.usersList=res.users
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
