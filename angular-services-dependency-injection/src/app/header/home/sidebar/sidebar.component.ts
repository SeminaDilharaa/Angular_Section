import { Component, Inject, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { USER_TOKEN1 } from 'src/app/app.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  // constructor(@Inject(USER_TOKEN1) private subService: SubscribeService){

  // }

  subService = inject(SubscribeService);
  OnSubscribe(){
    this.subService.OnSubscribeClicked('Quaterly');
  }
}