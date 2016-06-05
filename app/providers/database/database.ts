import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

declare var firebase;

export interface Check {
  description: string;
  item: number;
  title: string;
  value: string;
}

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {
  static VALUE: string = 'value';
  
  data: any = null;

  constructor() {
    this.data = firebase.database();
  }
  
  loadChecks(ref: string): Promise<any[]> {
    return this.data.ref(ref).once(Database.VALUE).then((snapshot: any) => {
      var snap: {[key: string]: Check} = snapshot.val();
      if (!(snap)) {
        return [];
      }
      return Object.keys(snap)
        .filter((key: string) => !!snap[key].item)
        .map((key: string) => snap[key])
        .sort((a: Check, b: Check) => a.item - b.item);
    });
  }
}

