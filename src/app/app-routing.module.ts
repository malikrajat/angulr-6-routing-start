import {CanDeactivate, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServerComponent} from './servers/server/server.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    // canActivate: [AuthGuard], // to protect parent level & child pages
    component: UsersComponent,
    // canActivateChild: [AuthGuard], // to protect only child pages not parent pages
    data: {message: 'data through route'},
    children: [
      { path: 'user/:id/:name', component: UserComponent }
    ]
  },
  { path: 'server', canActivate: [AuthGuard], component: ServerComponent },
  { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServersComponent },
      { path: ':id/edit', component: ServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
