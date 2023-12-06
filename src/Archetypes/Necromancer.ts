import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private archetypeEnergyType: EnergyType;
  private static instancesCounter = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instancesCounter += 1;
    this.archetypeEnergyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancesCounter;
  }

  get energyType(): EnergyType {
    return this.archetypeEnergyType;
  }
}