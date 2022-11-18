import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent {
  constructor(private contactService: ContactService){}

  sBanco: Banco = { id: 1, nombre: "Banco Estado"};
  lBancos: Banco[] = [
    { id: 1, nombre: "Banco Estado"},
    { id: 2, nombre: "Banco Itau"},
    { id: 3, nombre: "Banco de Chile"},
    { id: 4, nombre: "Banco Falabella"},
  ];

  sCuenta: Cuenta = { id: 1, des: "Vista"};
  lCuentas: Cuenta[] = [
    { id: 1, des: "Vista"},
    { id: 2, des: "Corriente"},
    { id: 3, des: "Ahorro"}
  ];

  contact = {
    user_id: localStorage.getItem('user_id'),
    rut: '',
    nombre: '',
    correo: '',
    telefono: '',
    cuenta: this.sCuenta,
    banco_destino: this.sBanco

  }


  createContact(){
    this.contactService.createContact(this.contact)  
      .subscribe({
        next: (n) => console.log("N=>", n),
        error: (e) => console.log("E=>", e)
      });
  }

  onBancoChange(target: any){
    const bancoSelec: Banco = this.lBancos.find( b => b.id == target.value) || this.sBanco;
    this.contact.banco_destino = bancoSelec;
  }

  onCuentaChange(target: any){
    const cuentaSelec: Cuenta = this.lCuentas.find( b => b.id == target.value) || this.sCuenta;
    this.contact.cuenta = cuentaSelec;
  }


}

interface Banco {
  id: number,
  nombre: string
}

interface Cuenta {
  id: number,
  des: string
}
