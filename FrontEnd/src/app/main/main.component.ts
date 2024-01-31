import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{


  updateCart(myNums:number[]){
    let count =0
    myNums.forEach( num => {
      count += num;
    })

  }
}
