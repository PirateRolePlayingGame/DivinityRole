import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { PersonalInfoLabel } from './PersonalInfoLabel';
import { StatsLabel } from './StatsLabel';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  personalInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 16
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    border: '1 solid #000000',
    marginLeft: 16
  }
});

const PersonalInfo = () => (
  <View style={styles.personalInfoContainer}>
    <PersonalInfoLabel label="Name" />
    <PersonalInfoLabel label="Race" />
    <PersonalInfoLabel label="Level" />
  </View>
);

const Stats = () => (
  <View style={styles.statsContainer}>
    <StatsLabel label="HP" />
    <StatsLabel label="Armor 1" />
    <StatsLabel label="Armor 2" />
  </View>
);

export const StatsContainer = () => (
  <View style={styles.container}>
    <PersonalInfo />
    <Stats />
  </View>
);
