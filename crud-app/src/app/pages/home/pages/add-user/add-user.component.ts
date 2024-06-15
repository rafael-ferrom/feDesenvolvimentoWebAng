import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
   formGroup: FormGroup;

  constructor(private router: Router) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(40)]),
      funcao: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value); 
      
      this.formGroup.reset();

      alert('Usuário cadastrado com sucesso!');

      setTimeout(() => {
        this.router.navigate(["/app/users"]);
      });
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
