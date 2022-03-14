import Race from './Races';

export default class Halfling extends Race {
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.incrementInstances();
  }

  static incrementInstances() {
    this.numberOfInstances += 1;
  }

  static createdRacesInstances() {
    return this.numberOfInstances;
  }
}