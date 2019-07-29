import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsformComponent } from './contactsform/contactsform.component';

const routes: Routes = [
  {
    path: '', component: ContactsformComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
