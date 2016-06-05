import {Page, NavController} from 'ionic-angular';
import {ComponentRef} from '@angular/core';
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
  activeAnimation: string = '';
  activeCheck: Check = null;
  activeIndex: number = 0;
  
  constructor(public nav: NavController, public db: Database, public jq: JQuery) {
    this.loadChecks();
  }
  
  onAnimationEnd(): void {
    this.loadNextCheck();
    this.jq.$('#card').removeClass('animated ' + this.activeAnimation);
    this.activeAnimation = '';
  }
  
  loadChecks(): void {
    this.db.loadChecks('/').then((checks: Check[]) => {
      this.checks = checks;
      this.activeCheck = this.checks[this.activeIndex];
    });
  }
  
  loadNextCheck(): void {
    if (this.activeIndex == this.checks.length) {
      this.activeCheck = null;
      return;
    }
    this.activeIndex++;
    this.activeCheck = this.checks[this.activeIndex];
  }
  
  onClick(): void {
    this.activeCheck.value = 'na';
    this.activeAnimation = JQuery.ROTATE_OUT;
    this.jq.animate('card', this.activeAnimation).one(JQuery.ANIMATION_END, () => this.onAnimationEnd());
  }
  
  onSwipe(swipe: any): void {
    if (swipe.direction == JQuery.SWIPE_LEFT) {
      this.swipeLeft();
    } else if (swipe.direction == JQuery.SWIPE_RIGHT) {
      this.swipeRight();
    }
  }
  
  swipeLeft(): void {
    this.activeCheck.value = 'no';
    this.activeAnimation = JQuery.SLIDE_OUT_LEFT;
    this.jq.animate('card', this.activeAnimation).one(JQuery.ANIMATION_END, () => this.onAnimationEnd());
  }
  
  swipeRight(): void {
    this.activeCheck.value = 'yes';
    this.activeAnimation = JQuery.SLIDE_OUT_RIGHT;
    this.jq.animate('card', this.activeAnimation).one(JQuery.ANIMATION_END, () => this.onAnimationEnd());
  }
}
