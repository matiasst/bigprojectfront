import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data-collection',
  templateUrl: './user-data-collection.component.html',
  styleUrls: ['./user-data-collection.component.scss']
})
export class UserDataCollectionComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // display form values on success
    console.log(JSON.stringify(this.registerForm.value));
    this.registerForm.reset();
  }

  onReset() {
    this.registerForm.reset();
  }

}
