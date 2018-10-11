import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CustomerService } from '../customer.service';

import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;
  id: string;

  constructor(private customerService: CustomerService, private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.getCustomersList();
    this.id = localStorage.getItem('token');
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getCustomersList() {
    // Use snapshotChanges().map() to store the key
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomers() {
    this.customerService.deleteAll();
  }

}
