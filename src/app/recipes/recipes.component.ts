import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = new Recipe('', '', '')
  constructor() { }

  ngOnInit(): void {
  }
  sendRcp(recipe){
    console.log(this.recipe)
    this.recipe === recipe ? this.recipe = new Recipe('', '', ''): this.recipe = recipe
    console.log(this.recipe)
  }

}
