import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users = [
    { id: 1, name: 'Ana bono', email: 'ana.b@email.com', role: 'Líder Técnico', password: 'ana22' },
    { id: 2, name: 'Maria Eduarda Rubert', email: 'dudarub30@email.com', role: 'Engenheiro de FE', password: 'dudinha12' },
    { id: 3, name: 'Gabriela Moura', email: 'gabrielaMoura@email.com', role: 'Analista de dados', password: 'gabriela234' },
    { id: 4, name: 'Sara Estanislau', email: 'Saraestanislau@email.com', role: 'Engenheiro de BE', password: 'saraaaa' },
    { id: 5, name: 'Nicole Coelho', email: 'coelhoN@email.com', role: 'Líder Técnico', password: 'coelhinha' },
    { id: 6, name: 'Liz Macedo', email: 'lizM@email.com', role: 'Analista de dados', password: 'liz14' },
    { id: 7, name: 'Bianca Parisotto', email: 'Parisotto@email.com', role: 'Analista de dados', password: 'biancaPar' }
  ];

  constructor(private router: Router) { }

  editUser(user: any) {
    this.router.navigate(['app', 'edit-user', user.id]);
  }

  deleteUser(user: any) {
    this.users = this.users.filter(u => u.id !== user.id);
  }

}
