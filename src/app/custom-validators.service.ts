import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { min } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public static minimumAgeValidator(minAge : number): ValidatorFn
  {
    return (control : AbstractControl):ValidationErrors|any => 
    {
      if(!control.value)
        return null;//return if value is null
      
        var today= new Date();
        var dateOfBirth = new Date(control.value);
        var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
        var diffYears = (diffMilliSeconds/(1000 * 60 * 60 * 24))/365.25;

        if (diffYears>=minAge)
        return null;
        else
        return{minAge : {valid:false}};//invalid
    }

    };


    public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn
    {
      return (formGroup: AbstractControl): ValidationErrors | null =>
      {
        if (!(formGroup.get(controlToValidate) as FormControl).value)
          return null; //return, if the confirm password is null
  
        if ((formGroup.get(controlToValidate) as FormControl).value == (formGroup.get(controlToCompare) as any).value)
          return null; //valid
        else
        {
          (formGroup.get(controlToValidate) as FormControl).setErrors({ compareValidator: { valid: false } });
          return { compareValidator: { valid: false } }; //invalid
        }
      };

    }
  }
