import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { ListTransfersComponent } from './components/list-transfers/list-transfers.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: [AuthGuard]?"transfers-list":'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'transfers-list',
    component: ListTransfersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-transfer',
    component: CreateTransferComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-contact',
    component: CreateContactComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
