import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

declare var jQuery;
/*
  Generated class for the JQuery provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JQuery {
  static ANIMATION_END: string = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  static ROTATE_OUT: string = 'rotateOut';
  static SLIDE_OUT_LEFT: string = 'slideOutLeft';
  static SLIDE_OUT_RIGHT: string = 'slideOutRight';
  static SWIPE_LEFT: number = 2;
  static SWIPE_RIGHT: number = 4;
  
  $: any = null;

  constructor() {
    this.$ = jQuery;
  }
  
  animate(id: string, animation: string): any {
    return this.$('#' + id).addClass('animated ' + animation);
  }

}

