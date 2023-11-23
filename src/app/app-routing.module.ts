import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataCollectionComponent } from './user-data-collection/user-data-collection.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: UserDataCollectionComponent },
  { path: 'users', component: DisplayUserDataComponent },
  { path: '**', component: UserDataCollectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
