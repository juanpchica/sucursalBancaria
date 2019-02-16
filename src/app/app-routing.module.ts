import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { AdvisersComponent } from './pages/advisers/advisers.component';
import { ClientComponent } from './pages/client/client.component';
import { CardComponent } from './pages/card/card.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent},
  { path: 'clients/:id', component: ClientComponent},
  { path: 'card/:idClient/:id', component: CardComponent},
  { path: 'advisers', component: AdvisersComponent},
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule {

}
