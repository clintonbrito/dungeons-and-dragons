import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private archetypeEnergyType: EnergyType;
  private static instancesCounter = 0;

  constructor(name: string) {
    super(name);
    Warrior.instancesCounter += 1;
    this.archetypeEnergyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesCounter;
  }
  
  get energyType(): EnergyType {
    return this.archetypeEnergyType;
  }
}