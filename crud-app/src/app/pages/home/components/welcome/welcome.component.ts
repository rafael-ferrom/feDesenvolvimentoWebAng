import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users = [
    { id: 1, name: 'Lebron James', email: 'lb@email.com', role: 'Líder Técnico' },
    { id: 2, name: 'Stephen Curry', email: 's.curry30@email.com', role: 'Engenheiro de FE' },
    { id: 3, name: 'Jimmy Butler', email: 'jimmybutler@email.com', role: 'Analista de dados' },
    { id: 4, name: 'Jayson Tatum', email: 'tatum0@email.com', role: 'Engenheiro de BE' },
    { id: 5, name: 'Michael Jordan', email: 'jordan23@email.com', role: 'Líder Técnico' },
    { id: 6, name: 'Kobe Bryant', email: 'kb24@email.com', role: 'Analista de dados' },
    { id: 7, name: 'Shaquille O Neal', email: 'shaquioneal@email.com', role: 'Analista de dados' }
    
  ];

  totalUsers: number = this.users.length;

  userRoles: { [key: string]: number } = {};

  constructor() { }

  ngOnInit(): void {
     this.userRoles = this.calculateRoleCounts();
    console.log(this.userRoles);
  }

  getUserRolesArray() {
    return Object.entries(this.userRoles);
  }

  calculateRoleCounts() {
    return this.users.reduce((acc: { [key: string]: number }, user) => {
      acc[user.role] = (acc[user.role] ?? 0) + 1;
      return acc;
    }, {});
  }
}