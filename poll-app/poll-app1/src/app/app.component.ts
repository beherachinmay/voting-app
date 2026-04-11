import { Component } from '@angular/core';
import { PollComponent } from './poll/poll.component';
import { NgForOf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PollComponent, NgForOf, NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poll-app1';
}
