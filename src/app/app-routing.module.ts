import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { PipeComponent } from './components/demos/pipe/pipe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: "demos", children: [
        { path: 'binding', component: BindingComponent},
        { path: 'pipe', component: PipeComponent},
    ]},
    { path: '', redirectTo: 'home', pathMatch: 'full'} // Redirection par défault
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
