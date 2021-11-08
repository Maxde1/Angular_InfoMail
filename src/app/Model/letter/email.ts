import {Recipient} from './recipient';
import {EmailTemplate} from './emailTemplate';
import {EmailSchedule} from './emailSchedule';

export class Email {
  recipients!: Recipient[];
  emailTemplate!: EmailTemplate;
  emailSchedule!: EmailSchedule;
}
