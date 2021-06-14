import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  rates={
    total:2.0,
    stats:[{
      id:5,
      recurrence:0,
      percentage:0
    },
    {
      id:4,
      recurrence:0,
      percentage:0
    },
    {
      id:3,
      recurrence:0,
      percentage:0
    },
    {
      id:2,
      recurrence:1,
      percentage:100
    },
    {
      id:1,
      recurrence:0,
      percentage:0
    }],
    max:{
      rate:2,
      recurrence:1
    },
    posts:[
    {
      _id:"great_id",
      total_votes:5000500,
      rate:2,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
      _user:{
        _id:"user1",
        username:"User 1 "
      },
      user_vote:undefined,
      createdAt: new Date("2021-04-26T01:06:42.417+00:00")
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddRate(rate){
    this.rates.posts.push(rate)
    this.rates.total = (((this.rates.total)*(this.rates.posts.length-1)) + rate.rate)/(this.rates.posts.length)
    this.rates.stats[5 - rate.rate].recurrence ++
    if(this.rates.stats[5 - rate.rate].recurrence >this.rates.max.recurrence){
      this.rates.max = {
        rate:rate.rate,
        recurrence:this.rates.stats[5 - rate.rate].recurrence
      }
    }
    this.rates.stats = this.rates.stats.map(stat=> {
      return {
        id : stat.id,
        recurrence:stat.recurrence,
        percentage:(stat.recurrence/this.rates.max.recurrence)*100
      }
    })
  }

}
