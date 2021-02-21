import { Component, EventEmitter, OnInit, Output, AfterViewInit, AfterViewChecked, Input, SimpleChange } from '@angular/core';
import { faAngleDoubleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { disolve } from '../animations/disolveAnimation';

@Component({
  selector: 'app-work',
  animations: [ disolve ],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  constructor() { }

  private _isExtended : boolean;
  private _isDisolve : boolean;

  public faIcon = faAngleDoubleLeft;

  @Input() set IsExtended(value: boolean)
  {
    this._isExtended = value;

    if(value == true)
    {
      this.faIcon = faTimes;
      this._isDisolve = false;
    }
    else{
      this._isDisolve = true;
    }
  }

  get IsDisolve() : boolean
  {
    return this._isDisolve;
  }

  get IsExtended(){
    return this._isExtended;
  }


  @Output() public IsExtendedChange : EventEmitter<boolean> = new EventEmitter();

  public goTo()
  {
    this.IsExtendedChange.emit(this._isExtended);

    this._isExtended = !this._isExtended;

    if(this._isExtended)
    {
      this.faIcon = faTimes;
      this._isDisolve = false;
    }else{
      this.faIcon = faAngleDoubleLeft;
      this._isDisolve = true;
    }
  }
}
