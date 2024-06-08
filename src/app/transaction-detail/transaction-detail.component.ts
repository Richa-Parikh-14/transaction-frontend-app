
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
     // Extracting transaction ID from route parameters
    const id = this.route.snapshot.paramMap.get('id');

     // Fetching transaction details by ID
    if (id) {
      this.transactionService.getTransactionById(id).subscribe((data) => {
        this.transaction = data;
      });
    }
  }

  backToList() {
    this.router.navigate(['/']);
  }
}
