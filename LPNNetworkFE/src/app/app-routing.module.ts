import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { ForumComponent } from './pages/forum/forum.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResearchComponent } from './pages/research/research.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UniversityComponent } from './pages/university/university.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "sign-in", component: SignInComponent},
  { path: "sign-up", component: SignUpComponent},
  { path: "forum", component: ForumComponent},
  { path: "research", component: ResearchComponent},
  { path: "university", component: UniversityComponent},
  { path: "entreprise", component: EnterpriseComponent},
  { path: "forum", component: ForumComponent},
  { path: "profile/:id", component: ProfileComponent},
  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
