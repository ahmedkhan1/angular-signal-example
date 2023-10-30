import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', loadComponent: () => import('./components/client-list/client-list.component').then(c => c.ClientListComponent)},
    { path:  `${ROUTES_NAME.CLIENT}/:id`, loadComponent: () => import('./components/invoice-list/invoice-list.component').then(c => c.InvoiceListComponent)},
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
