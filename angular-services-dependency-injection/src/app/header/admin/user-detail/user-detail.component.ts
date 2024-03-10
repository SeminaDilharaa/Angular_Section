import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit{
  selectedUser: User | undefined;
  userService = inject(USER_TOKEN);

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data : User) =>{
      this.selectedUser = data;
      console.log(this.selectedUser)
    })
  }
}