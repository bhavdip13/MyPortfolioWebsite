import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as emailjs from 'emailjs-com';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 21.2455991;
  lng: number = 72.8648899;
  submitted = false;
  subjectPrefix = 'WEBSITE CONTACT: ';
  Isshowcontact = true;
  user: string;
  Isshowthanks = false;
  subject:string;
  ToEmail:string;

  form = new FormGroup({
    message: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),

  });

  constructor(private http: HttpClient) { }


  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {

      var template_params = {
        name: this.form.value.name,
        message: this.form.value.message,
        email: this.form.value.email,
        phone: this.form.value.phone,
        subject: this.form.value.subject,
        logotext: "Congratulations Bhavdip"


      }

      // send mail to the owner
      var service_id = "gmail";
      var template_id = "contact_form";
      var user_id = "user_X13rBg0QPTRNxjKED8JlI";
      this.user = this.form.value.name;
      this.subject=this.form.value.subject;
      this.ToEmail=this.form.value.email;

      emailjs.send(service_id, template_id, template_params, user_id)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.Isshowcontact = false;
          this.Isshowthanks = true;
          this.sendmailtovisitor();
        }, (err) => {
          console.log('FAILED...', err);

        });



    }

  }
sendmailtovisitor()
{
  var template_params = {
    "TO_EMAIL": this.ToEmail,
    "user": this.user,
    "subject": this.subject

 }
   // send mail the the visitor
   var service_id = "gmail";
   var template_id = "thank_you";
   var user_id = "user_X13rBg0QPTRNxjKED8JlI";
   emailjs.send(service_id, template_id, template_params, user_id)
     .then((response) => {
      console.log('SUCCESS Visitor Mail!', response.status, response.text);

     }, (err) => {
      console.log('FAILED Visitor Mail...', err);
     });
}
  ngOnInit() {
    // this.form.controls['message'].setValue('test message');
    // this.form.controls['email'].setValue('abc@gmail.com');
    // this.form.controls['phone'].setValue('9825891104');
    // this.form.controls['name'].setValue('test name');
    // this.form.controls['subject'].setValue('test subject');

  }

}
