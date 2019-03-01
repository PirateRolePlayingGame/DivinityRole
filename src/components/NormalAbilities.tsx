import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { Abilities } from './Abilities';

export const NormalAbilities = () => (
  <Abilities
    title="Abilities"
    abilities={[
      "Aerotheurge - Wind/Electric/Telekinesis",
      "Geomancy - Earth",
      "Pyrokinetic - Fire",
      "Hydrosophist - Water",
      "Summoning",
      "Necromancer",
      "Polymorph",
      "Huntsman",
      "Scoundrel",
      "Warfare"
    ]}
  />
);
