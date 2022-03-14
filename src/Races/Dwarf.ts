import Race from './Races';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity); // Referenciar a superclasse na subclasse e sobrescrever os métodos
    this.maxLifePoints = 80;
    Dwarf.incrementInstances(); // atributos estáticos são acessados manipulando a classe, não a instância.
  }

  static incrementInstances() {
    this.numberOfInstances += 1;
  }

  static createdRacesInstances() {
    return this.numberOfInstances;
  }
}