import {Page, NavController} from 'ionic-angular';
import {Check, Database} from '../../providers/database/database';
import {JQuery} from '../../providers/j-query/j-query';

/*
  Generated class for the RentersWalkthroughInspectionFormPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/renters-walkthrough-inspection-form/renters-walkthrough-inspection-form.html',
  providers: [Database, JQuery]
})
export class RentersWalkthroughInspectionFormPage {
  checks: Check[] = [];
  
  constructor(public nav: NavController, public db: Database, public jq: JQuery) {
    this.loadChecks();
  }
  
  loadChecks(): void {
    this.db.loadChecks('/').then((checks: Check[]) => this.checks = checks);
  }
}
