import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private archetypeEnergyType: EnergyType;
  private static instancesCounter = 0;

  constructor(name: string) {
    super(name);
    Ranger.instancesCounter += 1;
    this.archetypeEnergyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancesCounter;
  }
  
  get energyType(): EnergyType {
    return this.archetypeEnergyType;
  }
}