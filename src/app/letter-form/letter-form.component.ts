import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Email} from "../Model/letter/email";
import {RecipientType} from "../Model/letter/recipientType";
import {Recipient} from "../Model/letter/recipient";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-letter-form',
  templateUrl: './letter-form.component.html',
  styleUrls: ['./letter-form.component.css']
})
export class LetterFormComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  email = new Array<string>();
  addButton!: boolean;
  body = "";
  subject = "";
  emailTemplate = new Email();

  constructor(private service: UserService) {
  }

  ngOnInit() {

    }
  addEmail(e: string){
    this.email.push(e);
    console.log(this.email);
  }
  addRecipients(){
    this.emailTemplate.recipients = [] as Recipient[];
    this.parseRecipients(this.email, RecipientType.TO).forEach( item => {this.emailTemplate.recipients.push(item)});
  }
  addTemplate(){
    //this.emailTemplate.emailTemplate.EmailTemplate(this.subject, this.body)
    this.addRecipients();
    this.service.sendEmail(this.emailTemplate);
    console.log(this.emailTemplate)
  }
  public parseRecipients(inputEmails: string[] | null, type: RecipientType): Recipient[] {
    let recipients: Recipient[] = [];
    if(inputEmails === null) return recipients;

    inputEmails.forEach(inputEmail => {
      recipients.push(
        {
          email: inputEmail,
          recipientType: type
        } as Recipient
      )
    })
    return recipients;
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


}
