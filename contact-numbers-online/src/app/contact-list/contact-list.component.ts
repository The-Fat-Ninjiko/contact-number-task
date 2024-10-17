import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact.model';
import {ContactService} from '../service/contact.service';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  addContact() {
    this.router.navigate(['/contacts/new']);
  }
}
