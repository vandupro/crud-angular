import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Monsters } from '../../data/monsters';
import { Monster } from '../../models/monster';
import { Spells } from '../../data/spells';
import { Spell } from '../../models/spell';
@Component({
  selector: 'app-monster-update',
  templateUrl: './monster-update.component.html',
  styleUrls: ['./monster-update.component.css']
})
export class MonsterUpdateComponent implements OnInit {
  monsters: Array<Monster> = Monsters;
  spells: Array<Spell> = Spells;

  spe: Array<Spell> = [];
  objectFind: Monster = {
    id: 0,
    name: "",
    image: "",
    detail: '',
    spells: []
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router ) { }
    monsterId: Number = 0;
  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    const obj = this.monsters.find(item => item.id == Number(heroId))
    if(obj)
      this.objectFind = {...obj}
  }
  submit(itemForm: NgForm){
    console.log(this.objectFind);
  }
  updateSpell(e: any){

  }
}
