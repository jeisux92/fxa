import {AbstractControl} from '@angular/forms';

export interface RelatedComponent {
  controlName: string;
  controlValue: any;
  formControl: AbstractControl;
  options: any;
  filter: {control: string, field: string};
}
