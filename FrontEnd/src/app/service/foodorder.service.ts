import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { FoodOrder } from '../model/foodOrder';
import { FoodOrderSearchCriteria } from '../model/foodOrder';
@Injectable({
  providedIn: 'root'
})
export class FoodorderService {

  constructor(private http: HttpClient) { }
  url= `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  getFoodItems(criteria: FoodOrderSearchCriteria):Observable<any> {
    return this.http.get(this.url+`${criteria.searchFoodItem}`);
  }
}

