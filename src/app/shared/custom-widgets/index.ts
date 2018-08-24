import { FileComponent } from './file/file.component';
import { FileModalComponent } from './file-modal/file-modal.component';
import { MessageComponent } from './message/message.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { DatePickerComponent } from './datepicker/datepicker.component';
import { ConfrontComponent } from './confront/confront.component';
import { SummaryComponent } from './summary/summary.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { VerificationComponent } from './verification/verification.component';
import { FocusDirective } from './verification/focus.directive';
import { InfoValidationComponent } from './info-validation/info-validation.component';
import { InputInfoComponent } from './input-info/input-info.component';
import { DocumentReviewComponent } from './document-review/document-review.component';
import { NumberFormatComponent } from './number-format/number-format.component';
import { BooleanInputInfoComponent } from './boolean-input-info/boolean-input-info.component';
import { SelectUrlComponent } from './select-url/select-url.component';
import { PoliticsValidationComponent } from './politics-validation/politics-validation.component';
import { RejectionValidationComponent } from './rejection-validation/rejection-validation.component';

export const CUSTOM_WIDGETS = [
  FileComponent,
  FileModalComponent,
  MessageComponent,
  SimulatorComponent,
  DatePickerComponent,
  ConfrontComponent,
  SummaryComponent,
  ModalContentComponent,
  VerificationComponent,
  InfoValidationComponent,
  DocumentReviewComponent,
  NumberFormatComponent,
  InputInfoComponent,
  DocumentReviewComponent,
  BooleanInputInfoComponent,
  SelectUrlComponent,
  PoliticsValidationComponent,
  RejectionValidationComponent
];

export const CUSTOM_WIDGETS_LIBRARY = {
  'file': FileComponent,
  'file-modal': FileModalComponent,
  'result-message': MessageComponent,
  'simulator': SimulatorComponent,
  'date-picker': DatePickerComponent,
  'confront': ConfrontComponent,
  'summary': SummaryComponent,
  'modal': ModalContentComponent,
  'verification': VerificationComponent,
  'info-validation': InfoValidationComponent,
  'document-review': DocumentReviewComponent,
  'number-format': NumberFormatComponent,
  'input-info': InputInfoComponent,
  "boolean-input-info": BooleanInputInfoComponent,
  'select-url': SelectUrlComponent,
  'politics-validation': PoliticsValidationComponent,
  'rejection-validation' : RejectionValidationComponent
}
