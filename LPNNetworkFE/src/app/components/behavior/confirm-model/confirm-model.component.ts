import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.scss']
})
export class ConfirmModelComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit(): void {

  }

  onConfirm(){
    this.ngOnDestroy()
  }
  onCancel(){
    this.ngOnDestroy()
  }

  ngOnDestroy(): void {
    document.getElementById("model").classList.add('close')
  }
}
