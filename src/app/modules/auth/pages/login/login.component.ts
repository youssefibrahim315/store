import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { InputTextComponent } from "../../../../kernel/modules/inputs/components/input-text/input-text.component";
import { CommonModule } from '@angular/common';
import { UserActions } from '../../../../core/store/users';
import { LoginDto } from '../../models/login.model';
import { ButtonComponent } from "../../../../kernel/modules/inputs/components/button/button.component";
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent
]
})
export class LoginComponent {
  router = inject(Router)
  authService = inject(AuthService)
  private readonly store = inject(Store);
  //  vm$ = this.store.select();

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.email,
        Validators.required,
      ],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  submit() {
    const { username, password }:LoginDto = this.form.getRawValue() ;
    this.store.dispatch(UserActions.login({ username , password }));
  }

}
