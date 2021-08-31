import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilService } from './util.service';

@NgModule({
  imports: [CommonModule],
  providers: [UtilService]
})
export class SharedModule {}
