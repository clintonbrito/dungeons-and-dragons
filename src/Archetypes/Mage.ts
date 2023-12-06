import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private archetypeEnergyType: EnergyType;
  private static instancesCounter = 0;

  constructor(name: string) {
    super(name);
    Mage.instancesCounter += 1;
    this.archetypeEnergyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesCounter;
  }

  get energyType(): EnergyType {
    return this.archetypeEnergyType;
  }
}