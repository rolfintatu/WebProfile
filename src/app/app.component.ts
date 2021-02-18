import { Component } from '@angular/core';
import { slide } from './animations/slideAnimation'

@Component({
  selector: 'app-root',
  animations: [ slide ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isExtended: boolean = true;

  public extendWork(isExtended: boolean){
    this.isExtended = isExtended;
  }
}
