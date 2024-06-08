import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: any[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
     // Setting start and end date for fetching transactions
    const startDate = '2021-12-01';
    const endDate = '2021-12-20';
    // Fetching transactions within the specified date range
    this.transactionService.getTransactions(startDate, endDate).subscribe(data => {
      this.transactions = data;
    });
  }
}
