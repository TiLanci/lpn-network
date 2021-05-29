import { Component, OnInit } from '@angular/core';

import { ToastService } from 'src/app/components/behavior/toast/toast.service';
import { Toaster } from 'src/app/models/toaster';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile={
    _id:"userId",
    pdp:"assets/img/avatar.png",
    username:"Ahmed Bh",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse facilis blanditiis aperiam error. Illum voluptas magnam sit ab! Facere obcaecati, quam consectetur impedit saepe corrupti tempora architecto sint itaque.",
    email:"",
    phone:"",
    followers:516232165,
    following:6543,
    posts :[
      {
        _id:"great_id",
        total_votes:-1000,
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
          _id:"poster_id",
          username:"other User"
        },
        user_vote:true,
        createdAt: new Date()
      },
      {
        _id:"great_id",
        total_votes:-5000500,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
        _user:{
          _id:"poster_id",
          username:"great User"
        },
        user_vote:true,
        createdAt: new Date("2021-04-26T01:06:42.417+00:00")
      }
    ],
    badges:[]
  }

  favs=[
    {
      tag:"#LPN",
      total_use:50
    },
    {
      tag:"#dev",
      total_use:50
    },
    {
      tag:"#new",
      total_use:50
    },
    {
      tag:"#ToDo",
      total_use:50
    },
    {
      tag:"#Bla",
      total_use:50
    }
  ]

  constructor(private _toasterService: ToastService,) { }

  ngOnInit(): void {
    var toast: Toaster = {
      id: Math.random().toString(),
      message: 'WWWWWWWWWWWWWWWWWWWWWWWWW',
      type: 'error',
      duration: 5,
    };
    var toas2: Toaster = {
      id: Math.random().toString(),
      message: 'WWWWWWWWWWWWWWWWWWWWWWWWW',
      type: 'success',
      duration: 5,
    };
    this._toasterService.Add(toast);
    this._toasterService.Add(toas2);
  }

  onToggelCollapse(id:string){
    document.getElementById(id).classList.toggle('active')
  }

  awsomeFunction(){
    console.log('we did it')
  }
}
