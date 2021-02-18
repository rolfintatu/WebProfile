import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';


export const slide = trigger('slide', [

  state('slideIn',
    style({
      position: 'absolute',
      width: '100%',
      top: '0'
    })
  ),

  state('slideOut',
    style({
      width: '20%'
    })
  ),

  transition('slideOut <=> slideIn', [
    animate('.5s')
  ])
])
