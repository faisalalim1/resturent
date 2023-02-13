import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1280,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1280,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
