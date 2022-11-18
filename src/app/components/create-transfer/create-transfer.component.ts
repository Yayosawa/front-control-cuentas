import { Component } from '@angular/core';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.css']
})
export class CreateTransferComponent {

  transfer = {
    user_id: '',
    contact_id: '',
    contact_name: '',
    amount: 0
  }

  CreateTransfer(){}
}
