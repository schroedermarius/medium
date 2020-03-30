/**
 * Module Class for SassHelper
 * @author Marius Schröder
 * 2019-08-07
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SassHelperComponent } from './sass-helper';

@NgModule({
  declarations: [SassHelperComponent],
  imports: [
    CommonModule
  ],
  exports: [SassHelperComponent]
})
export class SassHelperModule { }
