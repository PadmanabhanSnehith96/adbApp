import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { GenderPipe } from './pipe/gender.pipe';

const paths : Routes = [
  {path:'',component:DashBoardComponent},
  {path:'listContacts',component:ContactListComponent},
  {path:'viewContact/:id',component:ContactDetailsComponent},
  {path:'addContact',component:ContactFormComponent},
  {path:'editContact/:id',component:ContactFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    DashBoardComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
