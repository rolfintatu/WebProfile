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
      // opacity: '1'
    })),

    state('close', style({
      // opacity: '0'
    })),

    transition('open => close', [
      animate('1s')
    ]),

    transition('close => open', [
      animate('.5s'),
    ])
  ]);
