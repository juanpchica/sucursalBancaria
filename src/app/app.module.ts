import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { ClientsComponent } from './pages/clients/clients.component';
import { AdvisersComponent } from './pages/advisers/advisers.component';
import { ClientComponent } from './pages/client/client.component';
import { AppComponent } from './app.component';

// Service
import { ApiService } from 'src/services/api';

//Others Modules
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Pipes
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';
import { CardComponent } from './pages/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AdvisersComponent,
    ClientComponent,
    CreditCardFormatPipe,
    CardComponent
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
