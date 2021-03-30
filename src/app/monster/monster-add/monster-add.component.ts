import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Monsters } from '../../data/monsters';
import { Monster } from '../../models/monster';
import { Spells } from '../../data/spells';
import { Spell } from '../../models/spell';
@Component({
  selector: 'app-monster-add',
  templateUrl: './monster-add.component.html',
  styleUrls: ['./monster-add.component.css']
})
export class MonsterAddComponent implements OnInit {

  constructor(private router: Router) { }
  monsters: Array<Monster> = Monsters;
  spells: Array<Spell> = Spells;

  spe: Array<Spell> = [];
  formObject: Monster = {
    id: 0,
    name: "",
    image: "",
    detail: '',
    spells: []
  }
  ngOnInit(): void {

  }
  submit(itemForm: NgForm) {
    this.formObject = { ...itemForm.value };
    this.formObject.spells = this.spe;
    this.monsters.push(this.formObject);
    this.formObject = {
      id: 0,
      name: "",
      image: "",
      detail: '',
      spells: []
    }
    //sessionStorage.setItem('arr', JSON.stringify(Monsters))
    this.router.navigate(['']);

  }
  addSpell(e: any) {
    if (e.target.checked) {
      let sr: Spell[] = this.spells.filter(item => item.id == e.target.value);
      this.spe.push(sr[0])
    }
  }
}
