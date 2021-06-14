import { Component, OnInit } from '@angular/core';

import { ToastService } from 'src/app/components/behavior/toast/toast.service';
import { Toaster } from 'src/app/models/toaster';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  _searchTerm: string ;
  get searchTerm(): string {

    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.universities = this.searchunivs(value);
  }

  all_universities=[
    {
      _id:"univ1",
      logo:"assets/img/logo.png",
      name:"Institut National des Science Applicable et de Technologie  INSAT",
      localisation:"Tunis, Tunisia"

    },
    {
      _id:"univ2",
      logo:"assets/img/logo.png",
      name:"Institut National des Science Applicable et de Technologie  INSAT",
      localisation:"Tunis, Tunisia"

    },
    {
      _id:"univ3",
      logo:"assets/img/logo.png",
      name:"Institut National des Science Applicable et de Technologie  INSAT",
      localisation:"Tunis, Tunisia"

    },
    {
      _id:"univ4",
      logo:"assets/img/logo.png",
      name:"Institut National des Science Applicable et de Technologie  INSAT",
      localisation:"Tunis, Tunisia"

    }
  ]

  suggestions=[
    {
      _id:"great_id0",
      username:"User 0",
      following: "Follow",
      pdp:"assets/img/avatar.png"
    },
    {
      _id:"great_id1",
      username:"User 1",
      following: "Follow",
      pdp:"assets/img/avatar.png"
    },
    {
      _id:"great_id2",
      username:"User 2",
      following: "Follow",
      pdp:"assets/img/avatar.png"
    }
  ]

  universities=this.all_universities.slice(0, 3);

  profile={
    _id:"userId",
    pdp:"assets/img/avatar.png",
    username:"Ahmed Bh",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse facilis blanditiis aperiam error. Illum voluptas magnam sit ab! Facere obcaecati, quam consectetur impedit saepe corrupti tempora architecto sint itaque.",
    email:"",
    phone:"",
    followers:5,
    following:2,
    posts :[
      {
        _id:"great_id",
        total_votes:5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in!",
        _user:{
          _id:"poster_id",
          username:"great User"
        },
        user_vote:undefined,
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

  }

  searchunivs(searchString: string) {
    if (searchString == null || searchString == "") {
      return this.all_universities.slice(0, 3);
    } else {
      return this.all_universities.filter((university) => {
        return (
          university.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) || university._id.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
        );
      });
    }
  }

  onToggelCollapse(id:string){
    document.getElementById(id).classList.toggle('active')
  }

  onFollow(e,id){
    let button = e.target as HTMLElement;
    button.classList.toggle('follow');
    button.classList.toggle('un-follow');
    if(this.suggestions.find(element => element._id == id).following == "Follow"){
      this.suggestions.find(element => element._id == id).following = "Following";

    } else{
      this.suggestions.find(element => element._id == id).following = "Follow";
    }

  }

  onMouseOverFollow(e, id){
    if(this.suggestions.find(element => element._id == id).following == "Following"){
      this.suggestions.find(element => element._id == id).following = "Un Follow";
    }
  }
  onMouseOutFollow(e, id){
    if(this.suggestions.find(element => element._id == id).following == "Un Follow"){
      this.suggestions.find(element => element._id == id).following = "Following";
    }
  }
}
