import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancesCounter;
  }
}