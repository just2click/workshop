import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent, resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'edit', component: ContactEditComponent },
  { path: 'edit/:id', resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange', component: ContactEditComponent },
  { path: 'chart', component: StatisticPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
