import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAngleDoubleRight, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  public faIcon = faAngleDoubleRight;
  private isExtended: boolean = false;
  private mediaQuery = window.matchMedia("min-width: 768px");

  @Output() OnExtend: EventEmitter<boolean> = new EventEmitter();

  public goTo()
  {
    this.OnExtend.emit(this.isExtended);
    this.isExtended = !this.isExtended;
    if(this.isExtended)
    {
      this.faIcon = faTimes;
    }else{
      this.faIcon = faAngleDoubleRight;
    }
  }

  ngOnInit(): void {
  }

}
