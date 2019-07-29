import { Component, OnInit } from '@angular/core';
import { SendEmail } from 'src/app/ServiceUrlModel/send-email';
import { ContactUSTemplate } from 'src/app/ServiceUrlModel/contact-ustemplate';
import { throwError } from 'rxjs';
import { ApiServiceService } from 'src/app/ServiceUrlModel/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactsform',
  templateUrl: './contactsform.component.html',
  styleUrls: ['./contactsform.component.scss']
})
export class ContactsformComponent implements OnInit {
user_name;
user_email;
user_message;
sendEmail: SendEmail;
  constructor(private myservice:ApiServiceService,private router:Router) {
    this.sendEmail=new SendEmail;
    this.sendEmail.template_params=new ContactUSTemplate;
   }

  ngOnInit() {
  }
onSubmit(){
  this.sendEmail.template_params.email_to=this.user_email;
  this.sendEmail.template_params.to_name=this.user_name;
  
  //console.log('contact us',this.sendEmail);
  this.myservice.send_email(this.sendEmail).subscribe(res=>{
  console.log('response- success->');
  alert('Thanks! your enquiry has been submitted.');
  this.router.navigate(['/dashboard']);
  //alert('Your message is submitted');
    },error=>{
         alert('Thanks! your enquiry has been submitted.');
         this.router.navigate(['/dashboard']);
        console.log('response error-->');
          return throwError(error);
         });

}
}
