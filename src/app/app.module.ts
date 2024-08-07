import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { PipeComponent } from './components/demos/pipe/pipe.component';
import { FormatterPipe } from './tools/pipes/formatter.pipe';
import { ReductionPipe } from './tools/pipes/reduction.pipe';
import { ChronometreComponent } from './components/exos/chronometre/chronometre.component';
import { DirectivesComponent } from './components/demos/directives/directives.component';
import { SurbrillanceDirective } from './tools/directives/surbrillance.directive';
import { ListeProduitsComponent } from './components/exos/liste-produits/liste-produits.component';
import { ParentComponent } from './components/demos/inputOutput/parent/parent.component';
import { EnfantComponent } from './components/demos/inputOutput/enfant/enfant.component';
import { AffichageListeComponent } from './components/exos/shoppingList/affichage-liste/affichage-liste.component';
import { AjoutArticleComponent } from './components/exos/shoppingList/ajout-article/ajout-article.component';
import { ShoppingComponent } from './components/exos/shoppingList/shopping/shopping.component';
import { LivreServiceComponent } from './components/demos/livre-service/livre-service.component';
import { ShoppingListServiceComponent } from './components/exos/shopping-list-service/shopping-list-service.component';
import { FormulaireComponent } from './components/demos/formulaire/formulaire.component';
import { ProfilUtilisateurComponent } from './components/demos/routing/profil-utilisateur/profil-utilisateur.component';
import { RoutingComponent } from './components/demos/routing/routing/routing.component';
import { SessionStorageComponent } from './components/demos/storage/session-storage/session-storage.component';
import { LocalStorageComponent } from './components/demos/storage/local-storage/local-storage.component';
import { StorageComponent } from './components/demos/storage/storage/storage.component';
import { BehaviorSubjetComponent } from './components/demos/behavior-subjet/behavior-subjet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/exos/pokedex/detail/detail.component';
import { ListComponent } from './components/exos/pokedex/list/list.component';
import { LoginComponent } from './components/demos/login/login.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './tools/interceptors/auth.interceptor';

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
        ParentComponent,
        EnfantComponent,
        AffichageListeComponent,
        AjoutArticleComponent,
        ShoppingComponent,
        LivreServiceComponent,
        ShoppingListServiceComponent,
        FormulaireComponent,
        ProfilUtilisateurComponent,
        RoutingComponent,
        SessionStorageComponent,
        LocalStorageComponent,
        StorageComponent,
        DetailComponent,
        ListComponent,
        BehaviorSubjetComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient( withFetch())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
