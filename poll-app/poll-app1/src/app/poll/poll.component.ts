import { Component, OnInit, ViewContainerRef, ɵɵrepeaterTrackByIndex } from '@angular/core';
import { PollService } from '../poll.service';
import { PollApp1 } from '../poll-app1.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent implements OnInit {
newPoll: PollApp1 = {
  id: 0,
  question: '',
  options: [
    { optionText: '', votes: 0 },
    { optionText: '', votes: 0 }
  ]
};
   polls: PollApp1[] = [];

  constructor(private pollService: PollService) {
  }

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error("Error fetching polls: ", error);
      }
    });
  }

  createPoll() {
    this.pollService.createPoll(this.newPoll).subscribe({
      next: (createPoll) => {
        this.polls.push(createPoll);
        this.resetPoll();
      },
      error: (error) => {
        console.error("Error creating polls: ", error);
      }
    });  
  }

  resetPoll() {
    this.newPoll = {
      id: 0,
      question: '',
      options: [
        { optionText: '', votes: 0 },
        { optionText: '', votes: 0 }
      ]
    };
  }

  vote(pollid: number, optionIndex: number) {
    this.pollService.vote(pollid, optionIndex).subscribe({
      next: () => {
        const poll = this.polls.find(p => p.id === pollid);
        if (poll) {
          poll.options[optionIndex].votes++;
        }

      },
      error: (error) => {
        console.error("Error voting on a poll: ", error);
    }});  

}

  trackByIndex(index: number): number {
    return index;
  }
}




