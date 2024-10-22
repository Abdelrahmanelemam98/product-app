import { Component, inject, OnInit } from '@angular/core';
import { CheckserverService } from '../services/checkserver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-error.component.html',
  styleUrl: './message-error.component.scss',
})
export class MessageErrorComponent implements OnInit {
  notAvalible = inject(CheckserverService);
  isAvailable = true;

  ngOnInit(): void {
    this.checkServer();
  }
  checkServer() {
    this.notAvalible.componentAvailable$.subscribe((available) => {
      this.isAvailable = available;
    });
  }
}
