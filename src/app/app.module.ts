import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { SpecMovesPreviewComponent } from './cmps/spec-moves-preview/spec-moves-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    StatisticPageComponent,
    ChartComponent,
    ContactEditComponent,
    SignupPageComponent,
    MovePreviewComponent,
    SpecMovesPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
