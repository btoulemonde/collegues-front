import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective implements Validators {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.startsWith('http')) {
      return null;
    }
    return {urlError: true};
  }

}
