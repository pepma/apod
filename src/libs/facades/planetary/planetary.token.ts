import { InjectionToken } from '@angular/core';
import { PlanetaryConfig } from './model/planetary.model';

export const PLANETARY_CONFIG_TOKEN = new InjectionToken<PlanetaryConfig>(
  '@lib/Planetary config token'
);
