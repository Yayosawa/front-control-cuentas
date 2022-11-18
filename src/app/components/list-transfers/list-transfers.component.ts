import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.css']
})
export class ListTransfersComponent implements OnInit{
  constructor(private transferService: TransferService){}

  lTransfers: Transfer[] = []

  public ngOnInit(): void {
    this.transferService.getTransfersById()  
      .subscribe({
        next: (n) => {
          this.lTransfers = n
        },
        error: (e) => console.log("E=>", e)
      });
 }

}

interface Transfer {
  _id: string,
  user_id: string,
  contact_id: string,
  contact_name: string,
  amount: number
}

