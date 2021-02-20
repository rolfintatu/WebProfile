import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { slide } from './animations/slideAnimation'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  animations: [ slide ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router) { }

  private _isExtended: boolean = false;

  @Input()
  set IsExtended(value: boolean)
  {
    this._isExtended = !value;
  }

  get IsExtended(){
    return this._isExtended;
  }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.router.url.includes("/easyeats")){
        this._isExtended = true;
      }
    }, 0);
  }

  public DoIt(value: boolean)
  {
    this._isExtended = !value;
  }
}
