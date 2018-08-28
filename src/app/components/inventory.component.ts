import { Component, OnInit, Output, EventEmitter} from '@angular/core';
export interface lineitem {
  label: string;
  image: string;
  quantity: number;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

 //HardCoded Inventory list
  inventory: lineitem[] = [

{label:"Apple", image: "apple.png", quantity: 8},
{label:"Strawberry", image: "strawberry.png", quantity: 10},
{label:"Carrot", image: "carrot.png", quantity: 20},
{label:"Acorn Squash", image: "acorn_squash.png", quantity: 10},
{label:"Pumpkin", image: "pumpkin.png", quantity: 5},
{label:"Onion", image: "onion.png", quantity: 4},
{label:"Mushroom", image: "mushroom.png", quantity: 12},
{label:"Chili Pepper", image: "chili_pepper.png", quantity: 20},

];
@Output()
itemSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  processitem(n: number) {
    console.log('inventory; ', this.inventory[n].label);
        //Fire an event - itemSelected
    this.itemSelected.next(this.inventory[n].label);
  }

}
