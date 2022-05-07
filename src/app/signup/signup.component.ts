import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors} from '@angular/forms';
// import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { CustomValidatorsService } from '../custom-validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted:boolean = false;

  signUpForm : FormGroup; 
  genders = ['male','female'];
  countries:Country[]=[];

  constructor(private fb:FormBuilder) { }

  // validationMessages = {

  //     'email': {
  //       'required': 'Email is required.',
  //       'emailDomain': 'Email domian should be pragimtech.com'
  //     }
  //   }

  ngOnInit(): void {

    // this.countriesService.getCountries().subscribe((response)=>
    // {
    //   this.countries = response;
    // });
    this.signUpForm = this.fb.group({ 
      firstName : [null,[Validators.required,Validators.minLength(2), Validators.maxLength(5)]],
      lastName :[null,[Validators.required,Validators.minLength(2)]],
      email : ['',[Validators.required,emailDomain]],
      dateOfBirth : [null,[Validators.required,CustomValidatorsService.minimumAgeValidator(18)]],
      password :[null,[Validators.required, Validators.minLength(6)]],
      confirmPassword :[null,[Validators.required, Validators.maxLength(5)]],
      mobile : [null,[Validators.required,Validators.pattern((/^[789]\d{9}$/))]],
      gender : [null,[Validators.required,Validators.minLength(2)]],
      countryID : [null,[Validators.required,Validators.minLength(2)]],
      receiveNewsLetter : [null,[Validators.required,Validators.minLength(2)]],
      
      // Nested Form
      skills : this.fb.group({
          skillName : [''],
          experienceInYears : [''],
          proficiency : ['beginner']
      })
    });

    // this.signUpForm.valueChanges.subscribe((value:any) => 
    // {
    //   console.log(value);
    // }
    // )
  }

  onLoadDataClick(): void {
    this.signUpForm.patchValue({
      firstName : 'Sanke',
      lastName : 'Thakre',
      email : 'admin@infotech.com',
      skills :{
        skillName : 'C#',
        experienceInYears : 5,
        proficiency : 'beginner'
      }
    })
  }

  get f() {return this.signUpForm.controls;}
  

  onSubmitClick() :void {

   this.submitted = true;
    console.log(this.signUpForm.value);  
    console.log(this.signUpForm.controls.firstName.touched);

  if (this.signUpForm.invalid) {return;}

    // to bulk set the value set value must update all form controls
    // this.signUpForm.setValue({
    //   firstName : 'Adam',
    //   lastName : 'smith',
    //   email : 'sanket@gmail.com',
    //   dateOfBirth : '11-10-2021',
    //   gender : 'male',
    //   countryID : 'UK',
    //   receiveNewsLetter : true,
    //   mobile : 514635135
    // }
    // )

    // to update particular value
    // this.signUpForm.patchValue({
    //   firstName : 'john',
    //   lastName : 'watt'
    // })

    // to clear the form including validators
    // this.signUpForm.reset({});

     // to clear the form with adding form elements
    //  this.signUpForm.reset({

    //   firstName:'Mike'
    //  });
  }



//   onAddSkill()
//   {
//     var formGroup = new FormGroup({
//       skillName: new FormControl(null, [Validators.required]),
//       level: new FormControl(null, [Validators.required])
//     });

//     (<FormArray>this.signUpForm.get("skills")).push(formGroup);
//   }

}



// // Custom Validator function for validation of Email
function emailDomain(control: AbstractControl): { [key: string]: any } | null {
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if (email === '' || domain.toLowerCase() === 'infotech.com') {
    return null;
  } else {
    return { 'emailDomain': true };
  }
}