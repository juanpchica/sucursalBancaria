import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { ClientsComponent } from './pages/clients/clients.component';
import { AdvisersComponent } from './pages/advisers/advisers.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AdvisersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
