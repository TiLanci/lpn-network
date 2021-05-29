import { Component, OnInit, Input } from '@angular/core';
import { Observable,interval  } from 'rxjs';

@Component({
  selector: 'app-pub-card',
  templateUrl: './pub-card.component.html',
  styleUrls: ['./pub-card.component.scss']
})
export class PubCardComponent implements OnInit {

  @Input() post;
  refreshPost = 0;

  constructor() {
    interval(60000)
    .subscribe(()=>{this.refreshPost++})
  }

  ngOnInit(): void {
  }

  upVote(): void {
    if(this.post.user_vote==undefined){
      this.post.user_vote = true;
      this.post.total_votes ++;
    }else if(this.post.user_vote==false){
      this.post.user_vote = true;
      this.post.total_votes ++;
      this.post.total_votes ++;
    }
  }

  downVote(): void {
    if(this.post.user_vote==undefined){
      this.post.user_vote = false;
      this.post.total_votes --;
    }else if(this.post.user_vote==true || this.post.user_vote==undefined){
      this.post.user_vote = false;
      this.post.total_votes --;
      this.post.total_votes --;
    }
  }

}
