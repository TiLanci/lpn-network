import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { ToastService } from 'src/app/components/behavior/toast/toast.service';
import { Toaster } from 'src/app/models/toaster';

@Component({
  selector: 'app-add-pub-card',
  templateUrl: './add-pub-card.component.html',
  styleUrls: ['./add-pub-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddPubCardComponent implements OnInit {

  @Output() Submit = new EventEmitter();
  @Input() rate: boolean;

  maxChars = 5;
  canwrite = true;
  stars = undefined;

  constructor(private _toastService: ToastService) {
  }

  ngOnInit(): void {

  }

  onChange(e, obj) {
    if (obj == 'text') {
      let target = e.target;
      let HTMLtext = target.innerText;

      if (HTMLtext.length > this.maxChars) {
        e.preventDefault()
      }
    } else {
      this.stars = e.target.value;
    }
  }

  onSubmit() {
    let target = document.getElementById('new-post');
    let HTMLtext = target.innerText;
    console.log(this.stars && HTMLtext.length > 0)
    if ((HTMLtext.length > 0 && !this.rate) || (HTMLtext.length > 0 && this.stars > 0)) {
      this.Submit.emit({
        _id: "great_id",
        rate: parseInt(this.stars),
        total_votes: 0,
        content: HTMLtext,
        _user: {
          _id: "poster_id",
          username: "great User"
        },
        user_vote: undefined,
        createdAt: new Date()
      });
      let toast: Toaster = {
        id: '_' + Date.now().toString(),
        message: "Post added successfully",
        type: "success",
        duration: 1,
      }
      this._toastService.Add(toast)
      target.innerText = "";
    } else {
      let toast: Toaster = {
        id: '_' + Date.now().toString(),
        message: "Can not add empty post",
        type: "error",
        duration: 1,
      }
      this._toastService.Add(toast)
    }

    // HTMLtext.split("#").join(" #").split(' ').forEach(element=>{
    //   if(element[0] == "#"){
    //     Tags.push(element)
    //   }
    // })
  }

}
