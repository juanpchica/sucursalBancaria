import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { ClientsComponent } from './pages/clients/clients.component';
import { AdvisersComponent } from './pages/advisers/advisers.component';

// Service
import { ApiService } from 'src/services/api';

import {HttpClientModule} from '@angular/common/http';
import { ClientComponent } from './pages/client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AdvisersComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
