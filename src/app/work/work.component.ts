import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAngleDoubleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { disolve } from '../animations/disolveAnimation';

@Component({
  selector: 'app-work',
  animations: [ disolve ],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  public faIcon = faAngleDoubleLeft;
  public isExtended: boolean = false;

  @Output() OnExtend: EventEmitter<boolean> = new EventEmitter();

  public goTo()
  {
    this.OnExtend.emit(this.isExtended);

    this.isExtended = !this.isExtended;

    if(this.isExtended)
    {
      this.faIcon = faTimes;
    }else{
      this.faIcon = faAngleDoubleLeft;
    }
  }

  ngOnInit(): void {
  }

}
