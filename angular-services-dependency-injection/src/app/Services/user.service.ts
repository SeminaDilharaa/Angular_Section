import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
   users: User[] = [
    new User('Steve Smith','Male','Monthly','Active'),
    new User('Semina Dilhara','Male','Yearly','Inactive'),
    new User('Mqark Tyler','Female','Quaterly','Active')
   ];

   constructor(private logger: LoggerService){

   }

   OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

   OnShowUserDetails(user : User){
    this.OnUserDetailsClicked.emit(user);
   }

   GetAllUser(){
    return this.users;
   }

   CreateUser(name:string,gender:string,subType:string,status:string){
    let user = new User(name,gender,subType,status);
    this.users.push(user);

    this.logger.LoggerMessage(name,status);
   }
}