import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { SharedModule } from '@nx-microfrontends/shared';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule({
      remoteName: 'mfe1',
      exposedModule: './Module'
    })
      .then(m => m.RemoteEntryModule)
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
