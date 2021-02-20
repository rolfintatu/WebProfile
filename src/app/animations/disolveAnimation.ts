import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';

export const disolve = trigger('disolve', [

    state('show',style({
      display: 'block'
    })),

    state('hide', style({
      display: 'none'
    })),

    transition('show => hide', [
      animate('1s')
    ]),

    transition('hide => show', [
      animate('.5s'),
    ])
  ]);
