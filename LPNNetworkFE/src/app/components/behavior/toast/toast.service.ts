import { Injectable } from '@angular/core';
import {Toaster} from '../../../models/toaster'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() {
  }
 Toast = new Subject<Toaster>()
 Add(toast:Toaster){
   this.Toast.next(toast)
 }


}
