import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { 
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  /** Ref: https://github.com/tryber/sd-014-b-project-trybers-and-dragons/pull/22/commits/02d42bba8a013555bcf52e2ca58bff75414ed34a
   * ajuda do repo Elithon sobre o método receiveDamage.
   */
  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._lifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    
    if (this._lifePoints > this._race.maxLifePoints) {
      this._lifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this.strength + 5);
  }
}

export default Character;