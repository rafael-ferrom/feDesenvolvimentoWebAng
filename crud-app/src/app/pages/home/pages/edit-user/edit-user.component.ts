import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: number | null = null;
  user: any;
  formGroup: FormGroup;

  users = [
    { id: 1, name: 'Ana bono', email: 'ana.b@email.com', role: 'Líder Técnico', password: 'ana22' },
    { id: 2, name: 'Maria Eduarda Rubert', email: 'dudarub30@email.com', role: 'Engenheiro de FE', password: 'dudinha12' },
    { id: 3, name: 'Gabriela Moura', email: 'gabrielaMoura@email.com', role: 'Analista de dados', password: 'gabriela234' },
    { id: 4, name: 'Sara Estanislau', email: 'Saraestanislau@email.com', role: 'Engenheiro de BE', password: 'saraaaa' },
    { id: 5, name: 'Nicole Coelho', email: 'coelhoN@email.com', role: 'Líder Técnico', password: 'coelhinha' },
    { id: 6, name: 'Liz Macedo', email: 'lizM@email.com', role: 'Analista de dados', password: 'liz14' },
    { id: 7, name: 'Bianca Parisotto', email: 'Parisotto@email.com', role: 'Analista de dados', password: 'biancaPar' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(40)]),
      funcao: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    });
  }

  ngOnInit(): void {
    // Pega o ID do usuário da URL, se estiver presente
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = +idParam;

      // Encontra o usuário correspondente na lista de usuários
      this.user = this.findUserById(this.userId);

      // Preenche o formulário com os dados do usuário
      if (this.user) {
        this.formGroup.patchValue({
          name: this.user.name,
          email: this.user.email,
          funcao: this.user.role,
          password: this.user.password
        });
      }
    }
  }

  saveUser() {
    if (this.formGroup.valid) {
      const updatedUser = {
        id: this.userId,
        ...this.formGroup.value
      };

      // Atualiza o usuário na lista de usuários
      const index = this.users.findIndex(user => user.id === this.userId);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }

      console.log('Usuário salvo:', updatedUser);

      alert('Usuário atualizado com sucesso!');

      
      setTimeout(() => {
        this.router.navigate(['/app/users']);
      }, 1000);
    } else {
      alert('Por favor, corrija os erros no formulário antes de salvar.');
    }
  }

  findUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}