import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RemoteEntryComponent } from './entry.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RemoteEntryComponent
  }
];

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [BrowserModule, RouterModule.forChild(ROUTES)],
  providers: [],
  exports: [RemoteEntryComponent]
})
export class RemoteEntryModule {
}
