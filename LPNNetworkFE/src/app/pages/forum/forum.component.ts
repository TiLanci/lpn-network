import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  posts =[
    {
      _id:"great_id",
      total_votes:1000,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"poster_id",
        username:"great User"
      },
      user_vote:undefined,
      createdAt: new Date("2021-04-27T14:06:50.417+00:00")
    },
    {
      _id:"great_id",
      total_votes:500,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"otherUser_id",
        username:"other User"
      },
      user_vote:undefined,
      createdAt: new Date()
    },
    {
      _id:"great_id",
      total_votes:5000500,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"poster_id",
        username:"great User"
      },
      user_vote:undefined,
      createdAt: new Date("2021-04-26T01:06:42.417+00:00")
    },
    {
      _id:"great_id",
      total_votes:1000,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"poster_id",
        username:"great User"
      },
      user_vote:undefined,
      createdAt: new Date("2021-04-27T14:06:50.417+00:00")
    },
    {
      _id:"great_id",
      total_votes:500,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"otherUser_id",
        username:"other User"
      },
      user_vote:undefined,
      createdAt: new Date()
    },
    {
      _id:"great_id",
      total_votes:5000500,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"poster_id",
        username:"great User"
      },
      user_vote:undefined,
      createdAt: new Date("2021-04-26T01:06:42.417+00:00")
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onToggelCollapse(id:string){
    document.getElementById(id).classList.toggle('active')
  }

}
