import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService{
 OnSubscribeClicked(type: string){
  alert('Thank you for subscribe us.You haved subscribes '+type+' Package');
 }
}