import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScancodePage } from './scancode';

@NgModule({
  declarations: [
    ScancodePage,
  ],
  imports: [
    IonicPageModule.forChild(ScancodePage),
  ],
})
export class ScancodePageModule {}
