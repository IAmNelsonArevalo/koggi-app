import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
    let login = JSON.parse(localStorage.getItem('auth')!);
    
    if(!login) {
      window.location.href = '/login'
    }
  }
}
