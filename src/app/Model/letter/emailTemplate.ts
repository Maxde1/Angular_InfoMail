export class EmailTemplate {
  subject!: string;
  body!: string;
  EmailTemplate(subj: string, body: string){
    this.subject = subj;
    this.body = body;
  }
}
