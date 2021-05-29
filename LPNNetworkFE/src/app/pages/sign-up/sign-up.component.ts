import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  imagePath;
  imgURL: any = "assets/svg/avatar.svg";
  message: string;

  page = 1;

  constructor() { }

  ngOnInit(): void {
  }

  readURL(files,e) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  delImg(){
    this.imgURL = "assets/svg/avatar-gray.svg";
  }

  onNext(){
    this.page ++;
    console.log(this.page)
  }
  onPrevious(){
    this.page --;
    console.log(this.page)
  }
  onSubbmit(){

  }

}
