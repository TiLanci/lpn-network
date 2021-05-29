import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-pub-card',
  templateUrl: './add-pub-card.component.html',
  styleUrls: ['./add-pub-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddPubCardComponent implements OnInit {

  maxChars = 5;
  canwrite = true;

  constructor() {
  }

  ngOnInit(): void {
    // let selection;
    // document.onselectionchange = function() {
    //   console.log('New selection made');
    //   selection = document.getSelection();
    //   console.log(selection);
    // };
  }

  changed(event){
    let target = event.target;
    let HTMLtext = target.innerText;
    // let preanchorOffset =  document.getSelection().anchorOffset
    // let preanchorNode =  document.getSelection().anchorNode
    // let innerHTML=``
    // HTMLtext.split("#").join(" #").split(' ').forEach(element=>{
    //   if(element[0] == "#"){
    //     innerHTML+='<span class="tag">' + element + '</span>';
    //     let newNode = document.createElement('span');
    //     newNode.className = 'tag';
    //   } else{
    //     innerHTML+= " "+element+" "
    //   }

    // })
    // target.innerHTML = innerHTML
    // var range,selection;
    // if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    // {
    //     selection = document.getSelection();
    //     selection.removeAllRanges();
    //     selection.collapse(target.childNodes[0],preanchorOffset)
    // }


    if(HTMLtext.length>this.maxChars){
      event.preventDefault()
    }
    console.log(event)

  }

  onSubmit(){
    let target = document.getElementById('new-post');
    let HTMLtext = target.innerText;
    let Tags=[]

    HTMLtext.split("#").join(" #").split(' ').forEach(element=>{
      if(element[0] == "#"){
        Tags.push(element)
      }
    })

    let newPost = {
      content: document.getElementById('new-post').innerHTML,
      Tags:Tags
    }
    console.log(newPost)
  }

}
