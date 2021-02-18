import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';

export const disolve = trigger('openClose', [

    state('open',style({
      display: 'block'
    })),

    state('close', style({
      display: 'none'
    })),

    transition('open => close', [
      animate('1s')
    ]),

    transition('close => open', [
      animate('.5s'),
    ])
  ]);
