import { Component, Inject, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { USER_TOKEN1 } from 'src/app/app.module';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  // constructor(@Inject(USER_TOKEN1) private subService : SubscribeService){

  // }

  subService = inject(SubscribeService);
  OnSubscribe(){
    this.subService.OnSubscribeClicked('Monthly');
  }
}