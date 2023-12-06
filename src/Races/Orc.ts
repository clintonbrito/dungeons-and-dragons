import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instancesCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instancesCounter;
  }
}