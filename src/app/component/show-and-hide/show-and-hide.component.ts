import { Component } from '@angular/core';

@Component({
  selector: 'app-show-and-hide',
  imports: [],
  templateUrl: './show-and-hide.component.html',
  styleUrl: './show-and-hide.component.css'
})
export class ShowAndHideComponent {
  display=true;

  s(){
    this.display=!this.display
  }
  
}
