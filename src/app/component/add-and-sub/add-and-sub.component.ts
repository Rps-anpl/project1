import { Component } from '@angular/core';

@Component({
  selector: 'app-add-and-sub',
  imports: [],
  templateUrl: './add-and-sub.component.html',
  styleUrl: './add-and-sub.component.css'
})
export class AddAndSubComponent {
  x:number=0;
  adddd(){
    this.x=this.x+100;
  }
  addd(){
    this.x=this.x + 10;
  }
  add(){
  
  return this.x++;
  }
  
  reset(){
    this.x=0;
  }
  min(){
    return this.x--;
  }
  minn(){
    this.x=this.x-10;
  }
  minnn(){
    this.x=this.x-100;
  }
}
