import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForumComponent } from './pages/forum/forum.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { SearchComponent } from './pages/search/search.component';
import { UniversityComponent } from './pages/university/university.component';
import { ResearchComponent } from './pages/research/research.component';
import { PubCardComponent } from './components/pub-card/pub-card.component';
import { NumberPipe } from './pipes/number.pipe';
import { CompareDatePipe } from './pipes/compare-date.pipe';
import { AddPubCardComponent } from './components/add-pub-card/add-pub-card.component';
import { ToastComponent } from './components/behavior/toast/toast.component';
import { ConfirmModelComponent } from './components/behavior/confirm-model/confirm-model.component';
import { MaxTextPipe } from './pipes/max-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ForumComponent,
    NavBarComponent,
    NotFoundComponent,
    ProfileComponent,
    EnterpriseComponent,
    SearchComponent,
    UniversityComponent,
    ResearchComponent,
    PubCardComponent,
    NumberPipe,
    CompareDatePipe,
    AddPubCardComponent,
    ToastComponent,
    ConfirmModelComponent,
    MaxTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
