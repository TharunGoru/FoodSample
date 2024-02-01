import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { MainComponent } from './main/main.component';

const foodOrderChildren: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home'},
  { path: 'home', component:HomeComponent},
  { path: 'food-details', component:FoodDetailsComponent}
];

const routes: Routes =[
  { path: '', component: MainComponent, children: foodOrderChildren },
  { path: 'home', component:HomeComponent},
  { path: 'food-details', component:FoodDetailsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
