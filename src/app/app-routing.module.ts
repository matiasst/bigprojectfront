import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataCollectionComponent } from './user-data-collection/user-data-collection.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: UserDataCollectionComponent },
  { path: 'users', component: DisplayUserDataComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: UserDataCollectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
