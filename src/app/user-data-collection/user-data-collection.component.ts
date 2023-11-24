import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-data-collection',
  templateUrl: './user-data-collection.component.html',
  styleUrls: ['./user-data-collection.component.scss']
})
export class UserDataCollectionComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private apiService: ApiService,
    private messageService: MessageService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required]]
    });
  }

  onSubmit() {
    try {
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
        // display form values on success
        this.apiService.postUser(this.registerForm.value).subscribe( data => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'User added successfully'});
        });
        this.registerForm.reset();
    } catch (error) {
      console.log(error);
    }

  }

  onReset() {
    this.registerForm.reset();
  }

}
