import { Spell } from './spell';
export class Monster {
    id: Number;
    name: string;
    image: string;
    detail: string;
    spells: Array<Spell>;
    constructor(id: Number, name: string, image: string, detail: string, spells: Array<Spell>){
        this.id = id;
        this.name = name;
        this.image = image;
        this.detail = detail;
        this.spells = spells
    }
}
