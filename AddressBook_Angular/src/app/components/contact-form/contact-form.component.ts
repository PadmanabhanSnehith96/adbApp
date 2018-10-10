import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact : Contact;
  isEditing : boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private contactService:ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contact = new Contact();
    this.isEditing = false;

    this.activatedRoute.params.subscribe(
      (params)=>{
        let contactId = params['id'];
        if(contactId){
          this.contactService.getContactById(contactId).subscribe(
            (data)=> {
              this.contact = data;
              this.isEditing = true;
            }
          )
        }
      }
    );
  }

  save(){
    if(this.isEditing){
      this.contactService.updateContact(this.contact).subscribe(
        (data) => {
          this.router.navigateByUrl("/listContacts");
        }
      );
    }else {
      this.contactService.addContact(this.contact).subscribe(
        (data) => {
          this.router.navigateByUrl("/listContacts");
        }
      );
    }
  }
}
