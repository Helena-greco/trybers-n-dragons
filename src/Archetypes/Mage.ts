import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  public energy: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.incrementInstances();
  }

  static incrementInstances() {
    this.numberOfInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}