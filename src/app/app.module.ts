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

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    NavBarComponent,
    PipeComponent,
    FormatterPipe,
    ReductionPipe,
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
