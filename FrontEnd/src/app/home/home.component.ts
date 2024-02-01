import { Component, OnInit } from '@angular/core';
import { FoodorderService } from '../service/foodorder.service';
import { FoodOrder, FoodOrderSearchCriteria } from '../model/foodOrder';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  arr: FoodOrder[]=[];
  setValue: number[]=[];
  data:any={meals:[]};
  itemsCount:number = 0;
  searchFoodItemsForm = this.formBuilder.group({
    searchFoodItem:['']
  })

  constructor (private foodOrderService: FoodorderService, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private mainComponent: MainComponent) {
  }

  ngOnInit(): void {
    this.getFoodItems();
    
  }
  

  getFoodItems(){
    const searchCriteria:FoodOrderSearchCriteria = {};
    searchCriteria.searchFoodItem = this.searchFoodItemsForm.get('searchFoodItem')?.value || '';
    this.foodOrderService.getFoodItems(searchCriteria).subscribe({
      next: (response) => {
        this.data = response;
        this.arr = this.data.meals;
        this.setValue = Array(this.arr.length).fill(0);
      }
    })
  }

  addItems(index:number){
    this.setValue[index]+=1
    this.senddataTomain()
  }
  removeItems(index:number){
    if (this.setValue[index] >0){
      this.setValue[index]-=1
    }
    this.senddataTomain()
  }

  senddataTomain(){
    let count =0;
    this.setValue.forEach( num => {
      count += num;
    })
    this.mainComponent.getvalue(count);
  }


}
