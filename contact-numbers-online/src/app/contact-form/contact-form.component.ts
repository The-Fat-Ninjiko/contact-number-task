import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact.model';
import {ContactService} from '../service/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(
    private readonly contactService: ContactService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContact(id).subscribe(contact => {
        this.contact = contact;
      });
    }
  }

  save() {
    if (this.contact._id) {
      this.contactService.updateContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    } else {
      this.contactService.addContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
