import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'clients', loadComponent: () => import('./clients.component').then(m => m.ClientsComponent) },
  { path: 'produits', loadComponent: () => import('./products.component').then(m => m.ProductsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
