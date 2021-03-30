import { Component, OnInit } from '@angular/core';
import { Monsters} from '../../data/monsters';
import { Monster } from '../../models/monster';
@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  constructor() { }
  monsters: Array<Monster> = Monsters;
  ngOnInit(): void {
    // let data = sessionStorage.getItem('arr');
    // if(data){
    //   sessionStorage.removeItem("arr");
    //   this.monsters = JSON.parse(data);
    // }   
  }
  removeMonster(data: Monster){
    this.monsters = this.monsters.filter(item => item.id != data.id);
  }


}
