import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  private isExtended: boolean = false;

  @Output() OnExtend: EventEmitter<boolean> = new EventEmitter();

  public goTo()
  {
    this.OnExtend.emit(this.isExtended);
    this.isExtended = !this.isExtended;
  }

  ngOnInit(): void {
  }

}
