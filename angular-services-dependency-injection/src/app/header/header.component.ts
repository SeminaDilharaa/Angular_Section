import { Component, Inject, inject } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';
import { USER_TOKEN1 } from '../app.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  // constructor(@Inject(USER_TOKEN1)private subService: SubscribeService){

  // }

  subService = inject(SubscribeService);

  OnSubscribe(){
    this.subService.OnSubscribeClicked("Yearly");
  }
}