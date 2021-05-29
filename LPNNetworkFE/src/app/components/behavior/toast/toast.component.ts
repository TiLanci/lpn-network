import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Toaster } from '../../../models/toaster';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  interval;
  Toasts:Array<Toaster> = []

  constructor(private _toasterService:ToastService) { }

  ngOnInit(): void {

    this._toasterService.Toast.subscribe(toast=>{
      if (this.Toasts.length == 0){
        this.Toasts.push(toast)
        let a = setInterval(()=>{
          if (document.getElementById(toast.id).classList){
            document.getElementById(toast.id).classList.add('start')
            clearInterval(a)
          }
        },10)

        this.interval = setInterval(()=>{
          if (this.Toasts.length == 0){
            clearInterval(this.interval)
          } else{

            document.getElementById(this.Toasts[0].id).classList.remove('starts')
            document.getElementById(this.Toasts[0].id).classList.add('close')

            setTimeout(()=>{
              this.Toasts.shift();
              if(this.Toasts.length == 0){
                clearInterval(this.interval)
              } else{
                document.getElementById(this.Toasts[0].id).classList.add('start')
              }
              }, 1000);
          }
        }, 3500)
      } else {
        this.Toasts.push(toast)
      }



    })
  }

}
