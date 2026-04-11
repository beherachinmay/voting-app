import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PollApp1 } from './poll-app1.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private baseUrl ='http://localhost:8080/api/polls'

  constructor(private http: HttpClient) { }



  createPoll(poll: PollApp1): Observable<PollApp1> {
    return this.http.post<PollApp1>(this.baseUrl, poll )
  }

  getPolls(): Observable<PollApp1[]> {
    return this.http.get<PollApp1[]>(this.baseUrl);
  }

  vote(pollId: number, optionIndex: number): Observable<void> {
    const url = `${this.baseUrl}/vote`
    return this.http.post<void>(url, { pollId, optionIndex });
  }
}
