import * as React from 'react';
import { Abilities } from './Abilities';

export const CivicAbilities = () => (
  <Abilities
    title="Civic Abilities"
    abilities={[
      'Athletics',
      'Bartering',
      'Luck',
      'Persuasion',
      'Academics',
      'Telekinesis',
      'Sneaking',
      'Thievery'
    ]}
  />
);
