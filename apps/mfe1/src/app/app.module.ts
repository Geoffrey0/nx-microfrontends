import { RemoteEntryModule } from './remote-entry/entry.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from '@nx-microfrontends/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RemoteEntryModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
