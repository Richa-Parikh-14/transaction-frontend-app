import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transaction/:id', component: TransactionDetailComponent },
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  { path: '**', redirectTo: '/transactions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
