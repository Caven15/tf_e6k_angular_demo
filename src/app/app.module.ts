import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './components/demos/pipe/pipe.component';
import { FormatterPipe } from './pipes/formatter.pipe';
import { ReductionPipe } from './pipes/reduction.pipe';
import { ChronometreComponent } from './components/exos/chronometre/chronometre.component';
import { DirectivesComponent } from './components/demos/directives/directives.component';
import { SurbrillanceDirective } from './directives/surbrillance.directive';
import { ListeProduitsComponent } from './components/exos/liste-produits/liste-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    NavBarComponent,
    PipeComponent,
    FormatterPipe,
    ReductionPipe,
    ChronometreComponent,
    DirectivesComponent,
    SurbrillanceDirective,
    ListeProduitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
