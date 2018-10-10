import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  title: string;
  logoUrl: string;
  ladyLogo: string;
  gentLogo: string;
  contacts: Contact[];

  constructor(private contactService:ContactService) {
    this.title = "Address Book";
    this.logoUrl = "/assets/images/adbLogo.png";
    this.ladyLogo = "/assets/images/lady.png";
    this.gentLogo = "/assets/images/gent.png";
  }

  ngOnInit() {
    this.contactService.getAllContacts().subscribe(
      (data) => this.contacts = data
    );
  }


}
