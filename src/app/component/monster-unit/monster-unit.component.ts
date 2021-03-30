import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-monster-unit',
  templateUrl: './monster-unit.component.html',
  styleUrls: ['./monster-unit.component.css']
})
export class MonsterUnitComponent implements OnInit {
  @Input('monster-data') monsterData: Monster;
  @Output() deleted = new EventEmitter<Monster>();
  constructor() { }
  ngOnInit(): void {
  }
  removeMonster(){
    this.deleted.emit(this.monsterData);
  }
}
