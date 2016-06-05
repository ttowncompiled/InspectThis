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
  $: any = null;

  constructor() {
    this.$ = jQuery;
  }

}

