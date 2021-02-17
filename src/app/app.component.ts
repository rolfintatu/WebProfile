import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProfile';

  public windowWidth: string = "20%";


  public extendWork(isExtended: boolean){
    if(isExtended)
    {
      this.windowWidth = "20%"
    }else{
      this.windowWidth = "100%"
    }
  }
}
